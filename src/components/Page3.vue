<template>
    <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
        <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
    </el-form-item>
    <el-form-item label="即时配送">
        <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
        <mavon-editor v-model="form.value"/>
    </el-form-item>
    <el-form-item>
        <img :src="form.sudentImg" style="width:100px;height:130px">
    </el-form-item>
    <el-form-item>
        <p>视频播放插件</p>
        <video-player class="video-player vjs-custom-skin" 
            ref="videoPlayer" 
            :playsinline="true" 
            :options="playerOptions">
        </video-player>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
    </el-form-item>
    </el-form>
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        
        form: {
          sudentImg:'',
          name: '',
          region: '',
          date1: '',
          date2: '',
          value:'',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        playerOptions: {
            playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
            autoplay: false, // 如果为true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 是否视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: {
              type: "video/mp4", // 类型
              src: '' // url地址
            },
            poster: '', // 封面地址
            notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true, // 当前时间和持续时间的分隔符
              durationDisplay: true, // 显示持续时间
              remainingTimeDisplay: false, // 是否显示剩余时间功能
              fullscreenToggle: true // 是否显示全屏按钮
            }
          }
      }
    },
    created(){
      this.convert();
    },
    methods: {
      convert:function() {
          this.playerOptions.sources.src='/dmms/v1/media/showMedia/103'
          this.form.sudentImg = '/dmms/v1/media/showMedia/104'
          axios.get('/dmms/index').then(res => {
              console.log('查询内容%o',res)
              this.form.name = res.data.msg
          })
      },
      onSubmit() {
          console.log(this.form.value)
        console.log('submit!');
      }
    }
  }
</script>