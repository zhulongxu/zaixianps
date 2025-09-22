import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = '3135421715@qq.com';	
		
		var settings = {
			title: 'About',
			params: [
                { title: "", html: '<img style="width:64px;" class="about-logo" alt="" src="images/favicon.png" />'},
				{title: "Name:", html: '<span class="about-name">在线PS网页版</span>'},
                { title: "Version:", value: 'V1.0.0' },
				{title: "Description:", value: "Online image editor."},
				{title: "Author:", value: 'ZHULONGXU'},
				{title: "Email:", html: '<a href="mailto:' + email + '">' + email + '</a>'},
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;
