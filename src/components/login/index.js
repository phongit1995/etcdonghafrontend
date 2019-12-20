import React , {Component} from 'react' ;
import './Login.css';
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }
    onchangInput =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        let {match} = this.props ;
        console.log(match);
        return (
            <div classNameăccsa="panel panel-default ">
        <div className="container">
          <div className="row" style={{marginTop: '20px'}}>
            <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                <fieldset>
                  <h2>Đăng nhập hệ thống!</h2>
                  <hr className="colorgraph" />
                  <div className="form-group" id="status">
                    <input type="text" name="username"   className="form-control input-lg" value = {this.state.username} placeholder="Tài khoản" required="true" onChange= {(e)=>this.onchangInput(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="password" name="password"  className="form-control input-lg" placeholder="Mật khẩu" value = {this.state.password} required="true" onChange= {(e)=>this.onchangInput(e)}/>
                  </div>
                  <span className="button-checkbox">
                    <button type="button" className="btn" data-color="info">ghi nhớ</button>
                    <input type="checkbox" name="remember_me" id="remember_me" defaultChecked="checked" className="hidden" />
                    <button href className="btn btn-link pull-right">Quên mật khẩu?</button>
                  </span>
                  <hr className="colorgraph" />
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                      <input type="submit" className="btn btn-lg btn-success btn-block" defaultValue="Đăng nhập" />
                    </div>
                    <div className="col-xs-6 col-sm-8 col-md-6">
                      <button href="#" className="btn btn-lg btn-primary btn-block">Register</button>
                    </div>
                  </div>
                </fieldset>
            </div>
          </div>
        </div>
      </div>
     )
    }
}
export default Home ;