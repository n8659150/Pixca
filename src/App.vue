<template>
	<div id="app">
		<mainHeader></mainHeader>

		<main class="main-wrapper" id="container">
			<!-- image Gallery -->
			<div class="wrapper">
				<div class="">
					<galleryPics></galleryPics>
				</div>
			</div>
		</main>


		<mainFooter></mainFooter>

	</div>
</template>

<script>
import mainHeader from '@/components/mainHeader'
import galleryPics from '@/components/galleryPics'
import mainFooter from '@/components/mainFooter'
export default {
  name: 'app',
  components:{
    mainHeader,
    galleryPics,
    mainFooter
  }
}
</script>