//=====================================================================================================
// Defer the image loading by setting the `src` to a blank image and switching it later on to "data-src"
// this should be used for bigger images. For smaller icon images try to use the "icons-sprite.svg"
//=====================================================================================================
import Ember from 'ember';

export default Ember.Component.extend({
	attributeBindings: ["src", "data-src", "alt"],
	tagName: "img",
	src: "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",	// "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
	alt: "",
	rootURL: Ember.computed.alias("router.rootURL"),
	didInsertElement: function() {
		this._super(...arguments);
		Ember.run.schedule("afterRender", this, () => {
			var rootUrl = this.get("rootURL");
			var url = this.getAttr("data-src");
			if (rootUrl && url && url.indexOf("/")===0){
				url = rootUrl + url.slice(1);
			}
			this.set("src", url);
		});
	}
});
