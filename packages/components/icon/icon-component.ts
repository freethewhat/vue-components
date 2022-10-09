import {
  FeatherIconAttributes,
  StrokeLineCap,
  StrokeLineJoin,
} from './icon-component.d';
import feather, { FeatherAttributes, type icons } from 'feather-icons';
import { defineComponent, h, PropType } from 'vue';

export default defineComponent({
  name: 'IconComponent',
  functional: true,
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: Number,
    fill: { type: Boolean, default: false },
    strokeWidth: Number,
    strokeLinecap: String as PropType<StrokeLineCap>,
    strokeLinejoin: String as PropType<StrokeLineJoin>,
  },
  computed: {
    attributes() {
      return {
        height: this.size,
        'stroke-linecap': this.strokeLinecap,
        'stroke-linejoin': this.strokeLinejoin,
        'stroke-width': this.strokeWidth,
        width: this.size,
      } as FeatherIconAttributes;
    },
    iconElement() {
      const svg = feather.icons[this.icon].toSvg(this.attributes);
      const parser = new DOMParser();
      return parser.parseFromString(svg, 'text/html').documentElement;
    },
  },
  render() {
    const { attributes, innerHTML } = this.iconElement;
    return h('svg', { ...attributes, innerHTML });
  },
});
