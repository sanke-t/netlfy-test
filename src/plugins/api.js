import Vue from "vue";
import CFData from "@/api/cf-data"

export default (context, inject) => {
  const factories = {
    cfData: CFData
  }
  inject("api", factories);
}
