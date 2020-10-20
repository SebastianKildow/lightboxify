# Lightboxify 
## Lightweight Javascript Plugin to add Lightboxes

###### Setup
Just add the 'lightboxify.js' file to your project and add these two lines to your html file:

`<script src="js/lightboxify.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>`
##### Creating and Registering your Lightbox

There are currently 5 options for your lightbox *border size, animation style, animation length, border color, and the class name you used with in your html*

Create your lightbox object as per the line below
`var lightbox = new lightbox("15","bounce", "1.3", "#BF4342", "lightboxify-red")`

Then run the lightboxify method to get up and running
`lightbox.lightboxify()`


Format your lightbox in your html like this:
`<a class="lightboxify-red" href="lightbox_img_path">
	<img  alt="alt_text" src="thumbnail_path">
</a>`

Boom! You've been lightboxed.

###### Animations

There are currently three animations:
Wiggle
Bounce
Elastic

Animations are powered by GSAP and are easy to extend.