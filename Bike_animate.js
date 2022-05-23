(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bike_animate_atlas_.png", id:"Bike_animate_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Bike_animate_atlas_", frames: [[0,0,1920,1080],[0,2997,516,1080],[0,1082,1668,987],[0,2071,1051,924],[518,2997,503,87],[518,3086,503,26],[1053,2071,767,1080],[518,3114,32,142],[552,3114,4,218]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.spriteSheet = ss["Bike_animate_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg1 = function() {
	this.spriteSheet = ss["Bike_animate_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg2 = function() {
	this.spriteSheet = ss["Bike_animate_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bike = function() {
	this.spriteSheet = ss["Bike_animate_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.EBIKE = function() {
	this.spriteSheet = ss["Bike_animate_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.LIMITED = function() {
	this.spriteSheet = ss["Bike_animate_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Line = function() {
	this.spriteSheet = ss["Bike_animate_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.SocialApps = function() {
	this.spriteSheet = ss["Bike_animate_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.SocialLineDown = function() {
	this.spriteSheet = ss["Bike_animate_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Line();
	this.instance.parent = this;
	this.instance.setTransform(-383.5,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-383.5,-540,767,1080);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Line();
	this.instance.parent = this;
	this.instance.setTransform(-383.5,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-383.5,-540,767,1080);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SocialApps();
	this.instance.parent = this;
	this.instance.setTransform(-16,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-71,32,142);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SocialApps();
	this.instance.parent = this;
	this.instance.setTransform(-16,-71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-71,32,142);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SocialLineDown();
	this.instance.parent = this;
	this.instance.setTransform(-2,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-109,4,218);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SocialLineDown();
	this.instance.parent = this;
	this.instance.setTransform(-2,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-109,4,218);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SocialLineDown();
	this.instance.parent = this;
	this.instance.setTransform(-2,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-109,4,218);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bike();
	this.instance.parent = this;
	this.instance.setTransform(-525.5,-462);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-525.5,-462,1051,924);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bike();
	this.instance.parent = this;
	this.instance.setTransform(-525.5,-462);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-525.5,-462,1051,924);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LIMITED();
	this.instance.parent = this;
	this.instance.setTransform(-251.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-13,503,26);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LIMITED();
	this.instance.parent = this;
	this.instance.setTransform(-251.5,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-13,503,26);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.EBIKE();
	this.instance.parent = this;
	this.instance.setTransform(-251.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-43.5,503,87);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.EBIKE();
	this.instance.parent = this;
	this.instance.setTransform(-251.5,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-43.5,503,87);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.instance.setTransform(-834,-493.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-834,-493.5,1668,987);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(-258,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258,-540,516,1080);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(-258,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258,-540,516,1080);


(lib.Shop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shop
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AhCBtIAAjVIAYAAIAAAUQAJgMAKgGQALgGANAAQAUAAAPAKQAQALAHASQAIATAAAWQAAAYgIARQgKATgQALQgQAKgRAAQgMAAgKgGQgLgFgHgJIAABMgAgdhHQgOAPAAAeQAAAcANAPQAMAOARAAQAQAAAMgPQANgPAAgdQAAgegNgOQgLgPgQAAQgQAAgNAQg");
	this.shape.setTransform(33.2,45.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgzA8QgUgVAAgnQAAgqAYgVQAUgRAbAAQAgAAAUAVQAUAVAAAlQAAAcgIASQgKARgRAJQgRAKgUAAQgfAAgUgVgAgfgrQgNAPAAAcQAAAdANAPQANAPASAAQATAAANgPQANgPAAgdQAAgcgNgPQgNgPgTAAQgSAAgNAPg");
	this.shape_1.setTransform(16,42.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AAkBrIAAhjQAAgSgIgJQgJgJgPAAQgKAAgKAHQgLAGgEAKQgFAIAAATIAABVIgaAAIAAjVIAaAAIAABNQATgVAaAAQARAAANAHQANAGAFAMQAGAMAAAVIAABjg");
	this.shape_2.setTransform(-0.7,39.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgpBmQgUgJgLgRQgMgQAAgWIAbgCQACAQAGAKQAIALAPAGQAOAGAQAAQAQAAANgEQAMgGAHgIQAFgIAAgLQAAgKgFgHQgGgIgOgEQgIgEgcgHQgegHgLgFQgQgHgHgMQgIgMAAgPQAAgQAJgOQAKgPARgHQASgIAWAAQAVABATAHQASAIAKAPQAJAPACATIgcACQgCgUgMgLQgNgLgYAAQgZAAgLAKQgMAJgBAOQAAAMAJAHQAIAIAhAIQAiAHANAGQATAGAJAOQAJANAAASQAAAQgKAPQgKAQgSAIQgTAJgXgBQgbAAgTgIg");
	this.shape_3.setTransform(-19.1,39.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhCBtIAAjVIAYAAIAAAUQAJgMAKgGQALgGANAAQAUAAAPAKQAQALAHASQAIATAAAWQAAAYgIARQgKATgQALQgQAKgRAAQgMAAgKgGQgLgFgHgJIAABMgAgdhHQgOAPAAAeQAAAcANAPQAMAOARAAQAQAAAMgPQANgPAAgdQAAgegNgOQgLgPgQAAQgQAAgNAQg");
	this.shape_4.setTransform(33.2,45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgzA8QgUgVAAgnQAAgqAYgVQAUgRAbAAQAgAAAUAVQAUAVAAAlQAAAcgIASQgKARgRAJQgRAKgUAAQgfAAgUgVgAgfgrQgNAPAAAcQAAAdANAPQANAPASAAQATAAANgPQANgPAAgdQAAgcgNgPQgNgPgTAAQgSAAgNAPg");
	this.shape_5.setTransform(16,42.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AAkBrIAAhjQAAgSgIgJQgJgJgPAAQgKAAgKAHQgLAGgEAKQgFAIAAATIAABVIgaAAIAAjVIAaAAIAABNQATgVAaAAQARAAANAHQANAGAFAMQAGAMAAAVIAABjg");
	this.shape_6.setTransform(-0.7,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgpBmQgUgJgLgRQgMgQAAgWIAbgCQACAQAGAKQAIALAPAGQAOAGAQAAQAQAAANgEQAMgGAHgIQAFgIAAgLQAAgKgFgHQgGgIgOgEQgIgEgcgHQgegHgLgFQgQgHgHgMQgIgMAAgPQAAgQAJgOQAKgPARgHQASgIAWAAQAVABATAHQASAIAKAPQAJAPACATIgcACQgCgUgMgLQgNgLgYAAQgZAAgLAKQgMAJgBAOQAAAMAJAHQAIAIAhAIQAiAHANAGQATAGAJAOQAJANAAASQAAAQgKAPQgKAQgSAIQgTAJgXgBQgbAAgTgIg");
	this.shape_7.setTransform(-19.1,39.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,20.9,74.3,37.5);


(lib.Location = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AAlBPIAAhcQgBgQgDgJQgDgHgIgFQgIgFgKAAQgPAAgMAKQgMALAAAeIAABTIgaAAIAAiaIAXAAIAAAXQARgaAfAAQAOAAAMAFQALAFAGAIQAGAJACALQACAHAAATIAABdg");
	this.shape.setTransform(212.1,58.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgzA8QgUgVAAgnQAAgqAYgVQAUgRAbAAQAgAAAUAVQAUAVAAAlQAAAcgIASQgKARgRAJQgRAKgUAAQgfAAgUgVgAgfgrQgNAPAAAcQAAAdANAPQANAPASAAQATAAANgPQANgPAAgdQAAgcgNgPQgNgPgTAAQgSAAgNAPg");
	this.shape_1.setTransform(195.4,58.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgMBrIAAiaIAZAAIAACagAgMhMIAAgeIAZAAIAAAeg");
	this.shape_2.setTransform(183.8,55.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgDBlQgIgFgDgHQgDgIAAgXIAAhXIgTAAIAAgVIATAAIAAgnIAYgPIAAA2IAbAAIAAAVIgbAAIAABYQAAAMACADQABADADACQADACAGAAIAMgBIADAXQgLADgJgBQgOAAgGgEg");
	this.shape_3.setTransform(176.4,55.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("Ag4BEQgOgMAAgUQAAgLAFgKQAFgJAIgGQAJgEALgCIAXgEQAegEAPgFIAAgHQAAgQgHgHQgKgJgTAAQgSAAgJAHQgIAGgFARIgZgEQADgQAIgLQAIgKAPgFQAPgGATAAQATAAANAFQAMAFAGAHQAGAHACALQACAGAAASIAAAhQAAAlACAKQABAJAFAJIgcAAQgDgIgBgLQgPANgOAFQgMAFgPAAQgZAAgOgNgAgFAJQgQACgHADQgHADgDAGQgEAGAAAHQAAAKAIAHQAIAHAPAAQANAAAMgGQANgHAFgMQAEgJAAgRIAAgJQgPAFgaAEg");
	this.shape_4.setTransform(163.7,58.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgvA8QgTgVAAgnQAAgXAIgTQAJgTARgJQARgKASAAQAZAAAQANQAQANAFAXIgaAEQgDgPgKgIQgJgIgNAAQgSAAgMAOQgNAOAAAeQAAAfAMAOQAMAOARAAQAQAAAKgJQALgKADgUIAZAEQgEAagRAQQgSAPgZAAQgeAAgUgVg");
	this.shape_5.setTransform(148.3,58.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgzA8QgUgVAAgnQAAgqAYgVQAUgRAbAAQAgAAAUAVQAUAVAAAlQAAAcgIASQgKARgRAJQgRAKgUAAQgfAAgUgVgAgfgrQgNAPAAAcQAAAdANAPQANAPASAAQATAAANgPQANgPAAgdQAAgcgNgPQgNgPgTAAQgSAAgNAPg");
	this.shape_6.setTransform(132,58.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AhCBrIAAjVIAdAAIAAC7IBnAAIAAAag");
	this.shape_7.setTransform(115.9,55.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AAlBPIAAhcQgBgQgDgJQgDgHgIgFQgIgFgKAAQgPAAgMAKQgMALAAAeIAABTIgaAAIAAiaIAXAAIAAAXQARgaAfAAQAOAAAMAFQALAFAGAIQAGAJACALQACAHAAATIAABdg");
	this.shape_8.setTransform(212.1,58.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AgzA8QgUgVAAgnQAAgqAYgVQAUgRAbAAQAgAAAUAVQAUAVAAAlQAAAcgIASQgKARgRAJQgRAKgUAAQgfAAgUgVgAgfgrQgNAPAAAcQAAAdANAPQANAPASAAQATAAANgPQANgPAAgdQAAgcgNgPQgNgPgTAAQgSAAgNAPg");
	this.shape_9.setTransform(195.4,58.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgMBrIAAiaIAZAAIAACagAgMhMIAAgeIAZAAIAAAeg");
	this.shape_10.setTransform(183.8,55.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgDBlQgIgFgDgHQgDgIAAgXIAAhXIgTAAIAAgVIATAAIAAgnIAYgPIAAA2IAbAAIAAAVIgbAAIAABYQAAAMACADQABADADACQADACAGAAIAMgBIADAXQgLADgJgBQgOAAgGgEg");
	this.shape_11.setTransform(176.4,55.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ag4BEQgOgMAAgUQAAgLAFgKQAFgJAIgGQAJgEALgCIAXgEQAegEAPgFIAAgHQAAgQgHgHQgKgJgTAAQgSAAgJAHQgIAGgFARIgZgEQADgQAIgLQAIgKAPgFQAPgGATAAQATAAANAFQAMAFAGAHQAGAHACALQACAGAAASIAAAhQAAAlACAKQABAJAFAJIgcAAQgDgIgBgLQgPANgOAFQgMAFgPAAQgZAAgOgNgAgFAJQgQACgHADQgHADgDAGQgEAGAAAHQAAAKAIAHQAIAHAPAAQANAAAMgGQANgHAFgMQAEgJAAgRIAAgJQgPAFgaAEg");
	this.shape_12.setTransform(163.7,58.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AgvA8QgTgVAAgnQAAgXAIgTQAJgTARgJQARgKASAAQAZAAAQANQAQANAFAXIgaAEQgDgPgKgIQgJgIgNAAQgSAAgMAOQgNAOAAAeQAAAfAMAOQAMAOARAAQAQAAAKgJQALgKADgUIAZAEQgEAagRAQQgSAPgZAAQgeAAgUgVg");
	this.shape_13.setTransform(148.3,58.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AgzA8QgUgVAAgnQAAgqAYgVQAUgRAbAAQAgAAAUAVQAUAVAAAlQAAAcgIASQgKARgRAJQgRAKgUAAQgfAAgUgVgAgfgrQgNAPAAAcQAAAdANAPQANAPASAAQATAAANgPQANgPAAgdQAAgcgNgPQgNgPgTAAQgSAAgNAPg");
	this.shape_14.setTransform(132,58.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AhCBrIAAjVIAdAAIAAC7IBnAAIAAAag");
	this.shape_15.setTransform(115.9,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105,36.9,117.7,37.5);


(lib.Book = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Book
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AAgBrIgyhQIgSASIAAA+IgbAAIAAjVIAbAAIAAB4IA8g9IAiAAIg6A4IBABig");
	this.shape.setTransform(42.9,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgzA8QgUgVAAgnQAAgqAYgVQAUgRAbAAQAgAAAUAVQAUAVAAAlQAAAcgIASQgKARgRAJQgRAKgUAAQgfAAgUgVgAgfgrQgNAPAAAcQAAAdANAPQANAPASAAQATAAANgPQANgPAAgdQAAgcgNgPQgNgPgTAAQgSAAgNAPg");
	this.shape_1.setTransform(26,30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgzA8QgUgVAAgnQAAgqAYgVQAUgRAbAAQAgAAAUAVQAUAVAAAlQAAAcgIASQgKARgRAJQgRAKgUAAQgfAAgUgVgAgfgrQgNAPAAAcQAAAdANAPQANAPASAAQATAAANgPQANgPAAgdQAAgcgNgPQgNgPgTAAQgSAAgNAPg");
	this.shape_2.setTransform(9.3,30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AhQBrIAAjVIBQAAQAYAAAPAHQAOAGAJAOQAIANAAAPQAAAOgHAMQgIAMgPAHQAUAGAKAMQAKAOAAASQAAAQgFANQgHANgJAHQgKAHgOADQgOAEgVAAgAgzBRIAzAAIAUgBQAJgBAHgEQAGgFAFgHQAEgIAAgLQAAgMgGgIQgGgJgLgEQgLgDgTAAIgxAAgAgzgQIAvAAQAQAAAJgCQAKgDAGgIQAFgHAAgMQAAgKgFgIQgFgJgJgDQgKgDgVAAIgrAAg");
	this.shape_3.setTransform(-8.7,27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AAgBrIgyhQIgSASIAAA+IgbAAIAAjVIAbAAIAAB4IA8g9IAiAAIg6A4IBABig");
	this.shape_4.setTransform(42.9,27.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgzA8QgUgVAAgnQAAgqAYgVQAUgRAbAAQAgAAAUAVQAUAVAAAlQAAAcgIASQgKARgRAJQgRAKgUAAQgfAAgUgVgAgfgrQgNAPAAAcQAAAdANAPQANAPASAAQATAAANgPQANgPAAgdQAAgcgNgPQgNgPgTAAQgSAAgNAPg");
	this.shape_5.setTransform(26,30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgzA8QgUgVAAgnQAAgqAYgVQAUgRAbAAQAgAAAUAVQAUAVAAAlQAAAcgIASQgKARgRAJQgRAKgUAAQgfAAgUgVgAgfgrQgNAPAAAcQAAAdANAPQANAPASAAQATAAANgPQANgPAAgdQAAgcgNgPQgNgPgTAAQgSAAgNAPg");
	this.shape_6.setTransform(9.3,30.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhQBrIAAjVIBQAAQAYAAAPAHQAOAGAJAOQAIANAAAPQAAAOgHAMQgIAMgPAHQAUAGAKAMQAKAOAAASQAAAQgFANQgHANgJAHQgKAHgOADQgOAEgVAAgAgzBRIAzAAIAUgBQAJgBAHgEQAGgFAFgHQAEgIAAgLQAAgMgGgIQgGgJgLgEQgLgDgTAAIgxAAgAgzgQIAvAAQAQAAAJgCQAKgDAGgIQAFgHAAgMQAAgKgFgIQgFgJgJgDQgKgDgVAAIgrAAg");
	this.shape_7.setTransform(-8.7,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,8.9,72.6,37.5);


// stage content:
(lib.Bike_animate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_7.addEventListener("click", fl_ClickToGoToWebPage_16);
		
		function fl_ClickToGoToWebPage_16() {
			window.open("http://www.google.com", "_blank");
		}
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_6.addEventListener("click", fl_ClickToGoToWebPage_15);
		
		function fl_ClickToGoToWebPage_15() {
			window.open("http://www.google.com", "_blank");
		}
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_5.addEventListener("click", fl_ClickToGoToWebPage_14);
		
		function fl_ClickToGoToWebPage_14() {
			window.open("http://www.google.com", "_blank");
		}
	}
	this.frame_215 = function() {
		if (!this.looped) this.looped = 1;  
		if (this.looped++ > 1) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(214).call(this.frame_215).wait(16));

	// SocialApps
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(61,532);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween18("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(61,532);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},128).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},93).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(128).to({_off:false},0).to({_off:true,alpha:1},9).wait(94));

	// UPSocial
	this.instance_2 = new lib.Tween15("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(61,156.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween14("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.2,294.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},118).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},102).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(118).to({_off:false},0).to({_off:true,x:61.2,y:294.5,alpha:1},10).wait(103));

	// DownSocial
	this.instance_4 = new lib.Tween13("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(62,904.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween14("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(62,762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},118).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_5}]},102).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(118).to({_off:false},0).to({_off:true,y:762,alpha:1},10).wait(103));

	// Book
	this.button_7 = new lib.Book();
	this.button_7.parent = this;
	this.button_7.setTransform(489.9,82.4);
	new cjs.ButtonHelper(this.button_7, 0, 1, 2, false, new lib.Book(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_7).wait(231));

	// Location
	this.button_6 = new lib.Location();
	this.button_6.parent = this;
	this.button_6.setTransform(195.3,54.4);
	new cjs.ButtonHelper(this.button_6, 0, 1, 2, false, new lib.Location(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_6).wait(231));

	// Shop
	this.button_5 = new lib.Shop();
	this.button_5.parent = this;
	this.button_5.setTransform(215,69.4);
	new cjs.ButtonHelper(this.button_5, 0, 1, 2, false, new lib.Shop(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_5).wait(231));

	// Menu
	this.instance_6 = new lib.Tween9("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(734,596,0.434,0.434);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween10("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1332.5,596);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},27).to({state:[{t:this.instance_7}]},18).to({state:[{t:this.instance_7}]},185).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:1332.5,alpha:1},18).wait(186));

	// Bike
	this.instance_8 = new lib.Tween19("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-379.5,542);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween20("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(1102.5,542);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},81).to({state:[{t:this.instance_9}]},23).to({state:[{t:this.instance_9}]},126).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(81).to({_off:false},0).to({_off:true,x:1102.5},23).wait(127));

	// Line Yellow
	this.instance_10 = new lib.Tween7("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(502.5,556);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween8("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(502.5,556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},66).to({state:[{t:this.instance_11}]},22).to({state:[{t:this.instance_11}]},142).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(66).to({_off:false},0).to({_off:true,alpha:1},22).wait(143));

	// E-BIKE
	this.instance_12 = new lib.Tween5("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(507.5,481.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween6("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(507.5,481.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},23).to({state:[{t:this.instance_13}]},17).to({state:[{t:this.instance_13}]},190).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(23).to({_off:false},0).to({_off:true,alpha:1},17).wait(191));

	// BG WHITE
	this.instance_14 = new lib.Tween4("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(963,541.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(230).to({startPosition:0},0).wait(1));

	// BG YELLOW
	this.instance_15 = new lib.Tween1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-271.1,542);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween2("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(258,542);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},45).to({state:[{t:this.instance_16}]},19).wait(167));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(45).to({_off:false},0).to({_off:true,x:258},19).wait(167));

	// BG
	this.instance_17 = new lib.bg();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(231));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(961,541,1920,1080);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;