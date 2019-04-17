<template>
  <div class="login login-wrap">
    <div class="login-header">
      <img class="logo" src="../../assets/images/ego.png">
      <p class="intr">二手手机卖场</p>
    </div>
    <div class="login-form">
      <div class="input-cell">
        <input
          class="input"
          type="text"
          name="username"
          v-model="form.username"
          placeholder="请输入手机号"
        >
      </div>
      <div class="input-cell">
        <input
          class="input"
          :type="isVisablePwd ? 'text' : 'password'"
          name="password"
          v-model="form.password"
          placeholder="请输入密码"
        >
        <span @click="toggleEye">
          <icon :class="[isVisablePwd ? 'on-eye' : '', 'icon']" name="yanjing"></icon>
        </span>
      </div>
      <div class="action-cell">
        <p @click="goToRegister()">新用户注册</p>
        <p>忘记密码</p>
      </div>
      <!-- <div class="input-cell">
        <input type="text" class="input" v-model="form.captcha">

        <span class="send-capta-btn" v-if="!isSend" @click="sendCaptcha()">发送验证码</span>
        <span class="send-capta-btn" v-else>{{countDown}}秒</span>
      </div>-->

      <div class="btn-cell">
        <button class="btn" @click="handleLogin()">登录</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Toast } from 'mint-ui';
import { Action } from 'vuex-class';

@Component
export default class Login extends Vue {
  private isVisablePwd: boolean = false;
  private isSend: boolean = false;
  private countDown = 30;

  private interval: NodeJS.Timer | null = null;

  private form = {
    username: '',
    password: '',
  };

  private toggleEye() {
    this.isVisablePwd = !this.isVisablePwd;
  }

  private sendCaptcha() {
    this.isSend = true;
    this.startCountDown();
    Toast({
      message: '验证码已发送！',
    });
  }

  private startCountDown() {
    this.interval = setInterval(() => {
      this.countDown -= 1;
    }, 1000);

    setTimeout(() => {
      console.log('this.interval: ', this.interval);
      if (this.interval) {
        clearInterval(this.interval);
        this.isSend = false;
      }
    }, 30000);
  }

  @Action('auth/login')
  login: any;

  private handleLogin() {
    this.login(this.form).then((res: StoreState.ResponseData) => {
      console.log('res: ', res);
      if (res.status === 200) {
        this.$router.push('/');
      } else {
        Toast({
          message: res.message,
        });
      }
    });
  }

  private goToRegister() {
    this.$router.push('/register');
  }
}
</script>


<style lang="scss" scoped>
.login-header {
  text-align: center;

  .logo {
    margin-top: 120px;
    width: 260px;
  }

  .intr {
    font-size: 26px;
    color: #f7624f;
  }
}

.login-form {
  margin: 100px 50px 0 50px;

  .input-cell {
    position: relative;
    padding: 20px 20px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 28px;

    .send-capta-btn {
      position: absolute;
      top: 35px;
      right: 0;
    }
    .icon {
      position: absolute;
      top: 30px;
      right: 0px;
      font-size: 40px;
      color: #e5e5e5;
    }

    .on-eye {
      color: #f7624f;
    }
  }

  .action-cell {
    display: flex;
    align-items: center;
    padding: 0 20px;

    p {
      flex: 1;
      line-height: 60px;
      font-size: 26px;
      color: #f7624f;

      &:nth-child(2) {
        text-align: right;
      }
    }
  }

  .btn-cell {
    margin: 0 20px;
    margin-top: 100px;

    .btn {
      width: 100%;
      background: #f7624f;
    }
  }
}
</style>
