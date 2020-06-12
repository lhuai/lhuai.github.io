<template>
  <div class="index">
    <home></home>
    <intro></intro>
    <education></education>
    <skills></skills>
    <work></work>
    <honour></honour>
    <contact></contact>
  </div>
</template>
<script>
import home from './home';
import intro from './introduce';
import education from './education';
import skills from './skills';
import work from './work';
import honour from './honour';
import contact from './contact';
export default {
  components: {home, intro, education, skills, work, honour, contact},
  name: 'index'
}
</script>
