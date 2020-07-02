import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Create'
import Blog from './Blog'

class App extends Component {
  
render() {
  return (
    <div>
  <section class="row tm-section">
   <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
    <div class="tm-flex-center p-5 tm-bg-color-primary tm-section-min-h">
      <h1 class="tm-text-color-white tm-site-name">Personal Blogs</h1>
    </div>
  </div>
  <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
    <div class="tm-flex-center p-5">
      <q class="tm-quote tm-text-color-gray">A simple single-page application for creating and browsing blogs.</q>
    </div>
  </div>
</section>
<Blog></Blog>
<Create></Create>
</div>
  );
}
}

export default App;
