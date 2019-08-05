
import Foot from '@/components/Foot.vue'


let mixin = {
  filters: {
    formatePrice(value) {
      return value.toFixed(2)
    }
  },
  components: {
    Foot
  }
}

export default mixin