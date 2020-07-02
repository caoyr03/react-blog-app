import React, { Component } from 'react';

class Blog extends Component {
    state = {
        blogs: []
    }

  componentDidMount() {
    let currentComponent = this; 
    fetch('http://localhost:8010/proxy/api/read') //replace this url with your proxy, to avoid CORS issues
    .then(res => res.json())
    .then(res => {
        var array = [];
        Object.keys(res).forEach(e => array.push(res[e])); //convert json to a list of objects
        currentComponent.setState({ blogs: array});
    }).catch(err => err);
  }

render() {
    
    return (
      <div>
        {this.state.blogs.map((blog,index) => {
            if (index % 2 == 0) 
            return <section class="row tm-section tm-col-md-reverse">
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
             <div class="tm-flex-center p-5">
               <div class="tm-md-flex-center">
                 <h2 class="tm-text-color-primary mb-4">{blog['title']}</h2>
                 <p class="mb-4">{blog['body']}</p>
                 <p class="timestamp">{blog['time']}</p>
                 <a href="#" class="btn btn-primary float-lg-right tm-md-align-center">Read more</a>
               </div>
             </div>
           </div>
           <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
             <div class="tm-flex-center p-5 tm-bg-color-primary">
               <div class="tm-max-w-400 tm-flex-center tm-flex-col">
                 <img src="image-04.jpg" alt="Image" class="rounded-circle mb-4"/>
               </div>
             </div>
           </div>
           </section>
            if (index % 2 == 1)
            return <section class="row tm-section tm-mb-30">
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0 text-center">
                <img src="image-01.jpg" alt="Image" class="img-fluid"/>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div class="tm-flex-center p-5">
                <div class="tm-flex-center tm-flex-col">
                    <h2 class="tm-align-left">{blog['title']}</h2>
                    <p> {blog['body']}</p>
                    <p class="timestamp"> {blog['time']}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
                </div>
            </div>
            </section>
        })
        }
      </div>
    )
  };
}

export default Blog