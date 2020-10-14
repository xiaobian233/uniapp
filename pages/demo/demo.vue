<template>
	<view>

		<view class="view" hover-class="hover-class" hover-stay-time="888">
			123456789
		</view>
		<view class="overflow"></view>
		<text :selectable="false">text标签101 \n text标签456 \n text标签123</text>
		<view class="flex">
			<view>1</view>
			<view>2</view>
			<view>3</view>
		</view>
		<input type="text" v-model="txt.val.t" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				txt: {
					val:{
						t:123
					}
				}
			}
		},
		watch: {
			txt: {
				handler: (nval) => {
					console.log(nval)
				},
				deep: true,
				mmediate: true
			}
		},
		methods: {

		}
	}
</script>

<style>
	.view {
		width: 200upx;
		height: 200upx;
		background-color: #007AFF;
		margin: 50upx auto;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		text-align: center;
		line-height: 200upx;
		border-radius: 10upx;
	}

	.hover-class {
		background-color: yellow;
		animation: rotate-scale-up 0.65s linear both;
	}

	.overflow {
		height: 300upx;
	}

	.flex {
		height: 400upx;
		border: 1upx solid #666666;
		border-radius: 6upx;
		display: flex;
		justify-content: center;
		/* flex-direction: row;
		flex-wrap: wrap; */
		align-items: center;
		/* align-content:space-around; */
		/* justify-content: center; */
	}

	.flex view {
		/* width: 200upx;
		height: 200upx; */
		flex: 1;
		text-align: center;
		line-height: 200upx;
	}

	.flex view:nth-of-type(odd) {
		background-color: pink;
	}

	.flex view:nth-of-type(even) {
		background-color: yellow;
	}
</style>
