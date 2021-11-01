<template>
  <div class="hello">
    <div class="row">
      <div class="mb-3 col">
        <label for="firstNumber" class="form-label">First number</label>
        <input
          v-model="firstNumber"
          type="number"
          name="firstNumber"
          class="form-control"
        />
      </div>

      <div class="mb-3 col">
        <label for="secondNumber" class="form-label">Second number</label>
        <input type="number" name="secondNumber" class="form-control" />
      </div>

      <div class="col">
        <button
          @click="calculateNumbers()"
          type="submit"
          class="btn btn-primary w-100 submit-button"
        >
          Submit
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <p>First number: {{ firstNumber }}</p>
      </div>
      <div class="col">
        <p>Result is: {{ addResult }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const firstNumber = ref(0);
    const addResult = 0;

    function calculateNumbers() {
      console.log("firstNumber", firstNumber);
    }

    return {
      firstNumber,
      addResult,
      calculateNumbers,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.submit-button {
  margin-top: 32px;
}
</style>
