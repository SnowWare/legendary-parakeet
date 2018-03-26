<template>
  <q-page padding>
    <div class="word-order column">
      <div class="q-px-sm q-py-lg"> I am Stef</div>
      <div class="q-px-sm q-py-lg"> {{correctAnswer}}</div>
      <div class="row justify-center">
        <q-btn no-ripple=true class="q-mx-sm q-my-lg" v-for="(word, index) in sentenceWords" :key="`word-${index}`" :label="word"/>
      </div>
  </div>

  </q-page>
</template>

<script>
export default {
  name: "learn",
  data() {
    return {
      correctAnswer: "私はステフです",
      sentenceWords: ["私", "は", "ステフ", "です"]
    };
  }
};
</script>

<style>
.word-order {
  text-align: center;
}
</style>
