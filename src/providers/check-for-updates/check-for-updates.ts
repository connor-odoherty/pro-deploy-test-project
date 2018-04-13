import { Pro } from '@ionic/pro';
import { Injectable } from '@angular/core';

/*
  Generated class for the CheckForUpdatesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CheckForUpdatesProvider {

  constructor() {
    console.log('Hello CheckForUpdatesProvider Provider');
  }

  check_now() {
    this.performAutomaticUpdate();
  }

  async checkChannel() {
    try {
      const res = await Pro.deploy.info();
      console.log('Check channel result:')
      console.log(res)
    } catch (err) {
      console.log('checkChannel error')
      console.log(err)
      Pro.monitoring.exception(err);
    }
  }

  async getInfo() {
    const info = await Pro.deploy.info()
    console.log('Get info:', info)
    console.log(info)
    // { 'deploy_uuid': 'UUID_OF_ACTIVE_CODE', 'channel': 'CHANNEL_NAME', 'binary_version': 'X.X.X' }
  }

  async initDeploy() {
    const config = {
      'appId': 'dfdc2f30',
      'channel': 'master'
    }
    await Pro.deploy.init(config);
  }

  async performAutomaticUpdate() {
    console.log('Window plugins')
    console.log((<any>window))
    console.log((<any>window).plugins)
    try {
      await this.initDeploy();
      console.log('Trying auto update')
      await this.checkChannel();
      console.log('After check chanel')
      await this.getInfo();
      const resp = await Pro.deploy.checkAndApply(true, function(progress){
          console.log('Progress:', progress)
      });
      console.log('Resp')
      console.log(resp)
      if (resp.update){
        console.log('Found update and are redirecting')
        const versions = await Pro.deploy.getVersions();
        console.log('Versions:')
        console.log(versions)
        if (versions.length > 1) {
          Pro.deploy.deleteVersion(versions[0]);
        }
        console.log('Deleted')
      } else{
        console.log('No update available')
      }
    } catch (err) {
      console.log('performAutomaticUpdate error')
      console.log(err)
      Pro.monitoring.exception(err);
    }
  }

}
