import React  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './Main.css';
import { Menu ,Icon , Switch,Layout,Breadcrumb } from 'antd';


const SubMenu = Menu.SubMenu;
const {Content,Sider} = Layout;

class Siders extends React.Component {
  state = {
    theme : 'dark',
    current : '1',
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  handleClick = (e) => {
    console.log('click',e);
    if(e.key == "1"){
      {"content"}
  }else if(e.key == '2'){
      browserHistory.push(application_search_path);
  }else if(e.key == '3'){
      browserHistory.push(navigation_search);
  }else if(e.key == '4'){
      browserHistory.push(advertising_search);
  }
    this.setState({
      current:e.key,
    });
  }
  render(){
  return(
    <div style={{display:'flex',height:'100%',width:'100%',flexDirection:'row'}}>
        <Layout>
        <Sider width={240}>
        <div style={{width:240,background:this.state.theme=='dark'?'rgb(64,64,64)':'white',flexDirection:'column',display:'inline-flex'}}>
          
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            style={{ width: 240 }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}
            mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="1">
                <Link to={'/Table'}>{'Table'}</Link>
              </Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
              <Menu.Item key="5">
                <Link to={'/path'}> {'asdas'}</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
          <div style={{display:'flex',flex:1,alignItems:'flex-end',justifyContent:'flex-end'}}>
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
            />
          </div>
          
        </div>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Content id="content" style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
      </div>
  );
}
}


export default connect(({main}) => ({main}))(Siders);
