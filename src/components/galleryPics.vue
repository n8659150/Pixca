<template>
	<ul class="small-block-grid-2 medium-block-grid-3 large-block-grid-3 masonry" v-masonry transition-duration="0.3s" item-selector=".masonry-item">
		<li class="masonry-item grid" v-for="image in gallerySrc">
			<figure class="effect-sarah">
				<img :src="image['src']" alt="" />
				<figcaption>
					<h2>Photo <span>Title</span></h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<a href="#">View more</a> </figcaption>
			</figure>
		</li>
	</ul>
</template>

<script>
export default {
  name: 'galleryPics',
  data() {
    return {
      imgLoadedCount:0,
      gallerySrc:[
        {src:require('../assets/gallery/01.jpg')},
        {src:require('../assets/gallery/02.jpg')},
        {src:require('../assets/gallery/03.jpg')},
        {src:require('../assets/gallery/04.jpg')},
        {src:require('../assets/gallery/05.jpg')},
        {src:require('../assets/gallery/06.jpg')},
        {src:require('../assets/gallery/07.jpg')},
        {src:require('../assets/gallery/08.jpg')},
        {src:require('../assets/gallery/09.jpg')},
        {src:require('../assets/gallery/10.jpg')},
        {src:require('../assets/gallery/11.jpg')},
        {src:require('../assets/gallery/12.jpg')},
        {src:require('../assets/gallery/13.jpg')},
        {src:require('../assets/gallery/14.jpg')},
        {src:require('../assets/gallery/15.jpg')},
        {src:require('../assets/gallery/16.jpg')},
        {src:require('../assets/gallery/17.jpg')},
        {src:require('../assets/gallery/18.jpg')},
        {src:require('../assets/gallery/19.jpg')},
        {src:require('../assets/gallery/20.jpg')},
        {src:require('../assets/gallery/21.jpg')},
        {src:require('../assets/gallery/22.jpg')},
        {src:require('../assets/gallery/23.jpg')},
        {src:require('../assets/gallery/24.jpg')},
        {src:require('../assets/gallery/25.jpg')},
        {src:require('../assets/gallery/26.jpg')},
        {src:require('../assets/gallery/27.jpg')}
      ]
    }
  },
  mounted(){
        let imgs = document.querySelectorAll('img')
        Array.from(imgs).forEach((item)=>{
            item.onload = () =>{
              console.log(this.imgLoadedCount);
                this.imgLoadedCount++
            }
        })
  },
  watch:{
      imgLoadedCount (val) {
        console.log("count",val);
        console.log("total",this.gallerySrc.length);
          if(val == this.gallerySrc.length){
          // 图片全部加载完成之后手动调用redraw方法重绘masonry
          this.$redrawVueMasonry();
          }
      }
  }
}
</script>