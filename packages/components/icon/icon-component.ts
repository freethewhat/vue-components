import feather from 'feather-icons';
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'IconComponent',
  functional: true,
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  render() {
    const { contents, attrs } = feather.icons[this.icon];
    console.log(attrs, contents);
    return h('svg', { ...attrs, innerHTML: contents });
  },
});
