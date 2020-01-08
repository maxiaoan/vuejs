<template>
  <div>
    <h1>
      分类
    </h1>
    <div class="wrapper" ref="scroll">
      <ul class="content">
        <li>分类1001</li>
        <li>分类1002</li>
        <li>分类1003</li>
        <li>分类1004</li>
        <li>分类1005</li>
        <li>分类1006</li>
        <li>分类1007</li>
        <li>分类1008</li>
        <li>分类1009</li>
        <li>分类10010</li>
        <li>分类10011</li>
        <li>分类10012</li>
        <li>分类10013</li>
        <li>分类10014</li>
        <li>分类10015</li>
        <li>分类10016</li>
        <li>分类10017</li>
        <li>分类10018</li>
        <li>分类10019</li>
        <li>分类10020</li>
        <li>分类10021</li>
        <li>分类10022</li>
        <li>分类10023</li>
        <li>分类10024</li>
        <li>分类10025</li>
        <li>分类10026</li>
        <li>分类10027</li>
        <li>分类10028</li>
        <li>分类10029</li>
        <li>分类10030</li>
        <li>分类10031</li>
        <li>分类10032</li>
        <li>分类10033</li>
        <li>分类10034</li>
        <li>分类10035</li>
        <li>分类10036</li>
        <li>分类10037</li>
        <li>分类10038</li>
        <li>分类10039</li>
        <li>分类10040</li>
        <li>分类10041</li>
        <li>分类10042</li>
        <li>分类10043</li>
        <li>分类10044</li>
        <li>分类10045</li>
        <li>分类10046</li>
        <li>分类10047</li>
        <li>分类10048</li>
        <li>分类10049</li>
        <li>分类10050</li>
        <li>分类10051</li>
        <li>分类10052</li>
        <li>分类10053</li>
        <li>分类10054</li>
        <li>分类10055</li>
        <li>分类10056</li>
        <li>分类10057</li>
        <li>分类10058</li>
        <li>分类10059</li>
        <li>分类10060</li>
        <li>分类10061</li>
        <li>分类10062</li>
        <li>分类10063</li>
        <li>分类10064</li>
        <li>分类10065</li>
        <li>分类10066</li>
        <li>分类10067</li>
        <li>分类10068</li>
        <li>分类10069</li>
        <li>分类10070</li>
        <li>分类10071</li>
        <li>分类10072</li>
        <li>分类10073</li>
        <li>分类10074</li>
        <li>分类10075</li>
        <li>分类10076</li>
        <li>分类10077</li>
        <li>分类10078</li>
        <li>分类10079</li>
        <li>分类10080</li>
        <li>分类10081</li>
        <li>分类10082</li>
        <li>分类10083</li>
        <li>分类10084</li>
        <li>分类10085</li>
        <li>分类10086</li>
        <li>分类10087</li>
        <li>分类10088</li>
        <li>分类10089</li>
        <li>分类10090</li>
        <li>分类10091</li>
        <li>分类10092</li>
        <li>分类10093</li>
        <li>分类10094</li>
        <li>分类10095</li>
        <li>分类10096</li>
        <li>分类10097</li>
        <li>分类10098</li>
        <li>分类10099</li>
        <li>分类100100</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
	data(){
		return {
				scroll: null
		}
	},
  mounted() {
    let wrapper;
    wrapper = document.querySelector(".wrapper");
    this.scroll = new BScroll(wrapper,{

		});
  }
};
</script>

<style>
.wrapper {
  height: 150px;
  background-color: #f4f4f4;
	overflow: hidden;
	text-align: center
}
</style>
