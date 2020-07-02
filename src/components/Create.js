import React, { Component } from 'react';

class Create extends Component {

    handleSubmit(event) {
        event.preventDefault();
        var data = {};
        data['title'] = event.target[0].value;
        data['body'] = event.target[1].value;
        data['time'] = new Date().toLocaleString();;
        console.log(data);

        fetch('http://localhost:8010/proxy/api/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'}
        }).then(res => {
            console.log(res);
            return res;
        }).catch((error) => { console.error(error); });
        window.location.href = "/"; 
    }


    render() {
        return (
        <section class="row">
        <div class="col-lg-12 tm-form-header pl-5 pr-5">
            <h2 class="tm-container-inner tm-text-color-white">Write a Blog</h2>
        </div>
        <div class="col-lg-12 pl-2 pl-sm-3 pl-md-5 pr-2 pr-sm-3 pr-md-5">
            <form onSubmit={this.handleSubmit.bind(this)} class="row tm-container-inner tm-blog-form">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                <input type="text" name="blog_title" class="form-control" placeholder="Title"  required/>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                <textarea  name="blog_body" class="form-control" rows="6" placeholder="Blog body starts here" required></textarea>
                </div>
            </div>
            <div class="col-xs-12 mt-4 tm-center">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </form>
        </div>
        </section>
        )
    }

}

export default Create;

