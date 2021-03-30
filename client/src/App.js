import React from 'react';
import './App.css';
import './app.scss';
import {Switch, Route, BrowserRouter, withRouter } from 'react-router-dom';
//import { NativeRouter, BackButton } from 'react-router-native';
import Template from './template/template';
import StoryCheck from './storyCheck/storyCheck';
import Testimony from './testimony/testimony';
import TextEdit from './text/text';
import TemplateEdit from './templateEdit/template-edit';
//import BackButton from './backButton/backButton';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Template} />
        <Route exact path='/storyCheck' component={StoryCheck} />
        <Route exact path='/testimony' component={Testimony} />
        <Route exact path='/textEdit' component={TextEdit} />
        <Route exact path='/templateEdit' component={TemplateEdit} />
        <Route path='*' component={() => '404 Not Found'} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
