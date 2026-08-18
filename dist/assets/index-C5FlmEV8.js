(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mo="160",Fi={ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iu=0,Qo=1,Uu=2,Kc=1,$c=2,On=3,oi=0,We=1,Gn=2,ni=0,or=1,tl=2,el=3,nl=4,Nu=5,Si=100,Ou=101,Fu=102,il=103,rl=104,Bu=200,zu=201,Gu=202,ku=203,$a=204,Ja=205,Hu=206,Vu=207,Wu=208,Xu=209,qu=210,Yu=211,ju=212,Zu=213,Ku=214,$u=0,Ju=1,Qu=2,Us=3,td=4,ed=5,nd=6,id=7,Jc=0,rd=1,sd=2,ii=0,ad=1,od=2,ld=3,Qc=4,cd=5,hd=6,th=300,dr=301,fr=302,Qa=303,to=304,Zs=306,Bn=1e3,Mn=1001,eo=1002,Ge=1003,sl=1004,la=1005,dn=1006,ud=1007,zr=1008,ri=1009,dd=1010,fd=1011,yo=1012,eh=1013,$n=1014,Jn=1015,Gr=1016,nh=1017,ih=1018,bi=1020,pd=1021,yn=1023,md=1024,_d=1025,wi=1026,pr=1027,gd=1028,rh=1029,vd=1030,sh=1031,ah=1033,ca=33776,ha=33777,ua=33778,da=33779,al=35840,ol=35841,ll=35842,cl=35843,oh=36196,hl=37492,ul=37496,dl=37808,fl=37809,pl=37810,ml=37811,_l=37812,gl=37813,vl=37814,xl=37815,Ml=37816,yl=37817,Sl=37818,El=37819,Tl=37820,bl=37821,fa=36492,wl=36494,Al=36495,xd=36283,Rl=36284,Cl=36285,Pl=36286,lh=3e3,Ai=3001,Md=3200,yd=3201,ch=0,Sd=1,fn="",Re="srgb",Hn="srgb-linear",So="display-p3",Ks="display-p3-linear",Ns="linear",re="srgb",Os="rec709",Fs="p3",zi=7680,Ll=519,Ed=512,Td=513,bd=514,hh=515,wd=516,Ad=517,Rd=518,Cd=519,Dl=35044,Il="300 es",no=1035,kn=2e3,Bs=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cs=Math.PI/180,zs=180/Math.PI;function Kr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[r&255]+Ie[r>>8&255]+Ie[r>>16&255]+Ie[r>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Ne(r,t,e){return Math.max(t,Math.min(e,r))}function Pd(r,t){return(r%t+t)%t}function pa(r,t,e){return(1-e)*r+e*t}function Ul(r){return(r&r-1)===0&&r!==0}function io(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Tr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ke(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ld={DEG2RAD:Cs};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,i,s,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],_=i[0],m=i[3],f=i[6],M=i[1],v=i[4],S=i[7],A=i[2],C=i[5],E=i[8];return s[0]=o*_+a*M+l*A,s[3]=o*m+a*v+l*C,s[6]=o*f+a*S+l*E,s[1]=c*_+h*M+u*A,s[4]=c*m+h*v+u*C,s[7]=c*f+h*S+u*E,s[2]=p*_+d*M+g*A,s[5]=p*m+d*v+g*C,s[8]=p*f+d*S+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,p=a*l-h*s,d=c*s-o*l,g=e*u+n*p+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=p*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Xt;function uh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Gs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dd(){const r=Gs("canvas");return r.style.display="block",r}const Nl={};function Ur(r){r in Nl||(Nl[r]=!0,console.warn(r))}const Ol=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fl=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[Hn]:{transfer:Ns,primaries:Os,toReference:r=>r,fromReference:r=>r},[Re]:{transfer:re,primaries:Os,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ks]:{transfer:Ns,primaries:Fs,toReference:r=>r.applyMatrix3(Fl),fromReference:r=>r.applyMatrix3(Ol)},[So]:{transfer:re,primaries:Fs,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Fl),fromReference:r=>r.applyMatrix3(Ol).convertLinearToSRGB()}},Id=new Set([Hn,Ks]),ee={enabled:!0,_workingColorSpace:Hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Id.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=ns[t].toReference,i=ns[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ns[r].primaries},getTransfer:function(r){return r===fn?Ns:ns[r].transfer}};function lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _a(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Gi;class dh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=Gs("canvas")),Gi.width=t.width,Gi.height=t.height;const n=Gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(lr(e[n]/255)*255):e[n]=lr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ud=0;class fh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Kr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ga(i[o].image)):s.push(ga(i[o]))}else s=ga(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nd=0;class Xe extends Ni{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Mn,i=Mn,s=dn,o=zr,a=yn,l=ri,c=Xe.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Kr(),this.name="",this.source=new fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ai?Re:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bn:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bn:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Re?Ai:lh}set encoding(t){Ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ai?Re:fn}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=th;Xe.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(d+1)/2,A=(f+1)/2,C=(h+p)/4,E=(u+_)/4,U=(g+m)/4;return v>S&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=C/n,s=E/n):S>A?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=C/i,s=U/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=E/s,i=U/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(p-h)/M,this.w=Math.acos((c+d+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Od extends Ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ur("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ai?Re:fn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Od{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ph extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fd extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const p=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==p||c!==d||h!==g){let m=1-a;const f=l*p+c*d+h*g+u*_,M=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const A=Math.sqrt(v),C=Math.atan2(A,f*M);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}const S=a*M;if(l=l*m+p*S,c=c*m+d*S,h=h*m+g*S,u=u*m+_*S,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],p=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*p,t[e+1]=l*g+h*p+c*u-a*d,t[e+2]=c*g+h*d+a*p-l*u,t[e+3]=h*g-a*u-l*p-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),p=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"YZX":this._x=p*h*u+c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u-p*d*g;break;case"XZY":this._x=p*h*u-c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=i*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new N,Bl=new Ii;class $r{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox)),is.applyMatrix4(t.matrixWorld),this.union(is)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),rs.subVectors(this.max,br),ki.subVectors(t.a,br),Hi.subVectors(t.b,br),Vi.subVectors(t.c,br),Xn.subVectors(Hi,ki),qn.subVectors(Vi,Hi),pi.subVectors(ki,Vi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-pi.z,pi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,pi.z,0,-pi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-pi.y,pi.x,0];return!xa(e,ki,Hi,Vi,rs)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,ki,Hi,Vi,rs))?!1:(ss.crossVectors(Xn,qn),e=[ss.x,ss.y,ss.z],xa(e,ki,Hi,Vi,rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new N,new N,new N,new N,new N,new N,new N,new N],_n=new N,is=new $r,ki=new N,Hi=new N,Vi=new N,Xn=new N,qn=new N,pi=new N,br=new N,rs=new N,ss=new N,mi=new N;function xa(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){mi.fromArray(r,s);const a=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Bd=new $r,wr=new N,Ma=new N;class $s{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);const e=wr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(wr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(Ma)),this.expandByPoint(wr.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new N,ya=new N,as=new N,Yn=new N,Sa=new N,os=new N,Ea=new N;class Eo{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ya.copy(t).add(e).multiplyScalar(.5),as.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(ya);const s=t.distanceTo(e)*.5,o=-this.direction.dot(as),a=Yn.dot(this.direction),l=-Yn.dot(as),c=Yn.lengthSq(),h=Math.abs(1-o*o);let u,p,d,g;if(h>0)if(u=o*l-a,p=o*a-l,g=s*h,u>=0)if(p>=-g)if(p<=g){const _=1/h;u*=_,p*=_,d=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=s,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p=-s,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-o*s+a)),p=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+c):(u=Math.max(0,-(o*s+a)),p=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+p*(p+2*l)+c);else p=o>0?-s:s,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ya).addScaledVector(as,p),d}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,i=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,i=(t.min.x-p.x)*c),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,s){Sa.subVectors(e,t),os.subVectors(n,t),Ea.crossVectors(Sa,os);let o=this.direction.dot(Ea),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const l=a*this.direction.dot(os.crossVectors(Yn,os));if(l<0)return null;const c=a*this.direction.dot(Sa.cross(Yn));if(c<0||l+c>o)return null;const h=-a*Yn.dot(Ea);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,i,s,o,a,l,c,h,u,p,d,g,_,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,p,d,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,u,p,d,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Wi.setFromMatrixColumn(t,0).length(),s=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const p=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=p-_*c,e[9]=-a*l,e[2]=_-p*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*h,d=l*u,g=c*h,_=c*u;e[0]=p+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*h,d=l*u,g=c*h,_=c*u;e[0]=p-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=p*c+_,e[1]=l*u,e[5]=_*c+p,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-p*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=p-_*u}else if(t.order==="XZY"){const p=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zd,t,Gd)}lookAt(t,e,n){const i=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),jn.crossVectors(n,Je),jn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),jn.crossVectors(n,Je)),jn.normalize(),ls.crossVectors(Je,jn),i[0]=jn.x,i[4]=ls.x,i[8]=Je.x,i[1]=jn.y,i[5]=ls.y,i[9]=Je.y,i[2]=jn.z,i[6]=ls.z,i[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],v=n[7],S=n[11],A=n[15],C=i[0],E=i[4],U=i[8],x=i[12],T=i[1],k=i[5],G=i[9],K=i[13],D=i[2],B=i[6],H=i[10],Z=i[14],$=i[3],Q=i[7],P=i[11],R=i[15];return s[0]=o*C+a*T+l*D+c*$,s[4]=o*E+a*k+l*B+c*Q,s[8]=o*U+a*G+l*H+c*P,s[12]=o*x+a*K+l*Z+c*R,s[1]=h*C+u*T+p*D+d*$,s[5]=h*E+u*k+p*B+d*Q,s[9]=h*U+u*G+p*H+d*P,s[13]=h*x+u*K+p*Z+d*R,s[2]=g*C+_*T+m*D+f*$,s[6]=g*E+_*k+m*B+f*Q,s[10]=g*U+_*G+m*H+f*P,s[14]=g*x+_*K+m*Z+f*R,s[3]=M*C+v*T+S*D+A*$,s[7]=M*E+v*k+S*B+A*Q,s[11]=M*U+v*G+S*H+A*P,s[15]=M*x+v*K+S*Z+A*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],d=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+s*l*u-i*c*u-s*a*p+n*c*p+i*a*d-n*l*d)+_*(+e*l*d-e*c*p+s*o*p-i*o*d+i*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*p+i*o*u-n*o*p+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],d=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=u*m*c-_*p*c+_*l*d-a*m*d-u*l*f+a*p*f,v=g*p*c-h*m*c-g*l*d+o*m*d+h*l*f-o*p*f,S=h*_*c-g*u*c+g*a*d-o*_*d-h*a*f+o*u*f,A=g*u*l-h*_*l-g*a*p+o*_*p+h*a*m-o*u*m,C=e*M+n*v+i*S+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return t[0]=M*E,t[1]=(_*p*s-u*m*s-_*i*d+n*m*d+u*i*f-n*p*f)*E,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*f+n*l*f)*E,t[3]=(u*l*s-a*p*s-u*i*c+n*p*c+a*i*d-n*l*d)*E,t[4]=v*E,t[5]=(h*m*s-g*p*s+g*i*d-e*m*d-h*i*f+e*p*f)*E,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*f-e*l*f)*E,t[7]=(o*p*s-h*l*s+h*i*c-e*p*c-o*i*d+e*l*d)*E,t[8]=S*E,t[9]=(g*u*s-h*_*s-g*n*d+e*_*d+h*n*f-e*u*f)*E,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*f+e*a*f)*E,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*E,t[12]=A*E,t[13]=(h*_*i-g*u*i+g*n*p-e*_*p-h*n*m+e*u*m)*E,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*E,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*p+e*a*p)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,p=s*c,d=s*h,g=s*u,_=o*h,m=o*u,f=a*u,M=l*c,v=l*h,S=l*u,A=n.x,C=n.y,E=n.z;return i[0]=(1-(_+f))*A,i[1]=(d+S)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(d-S)*C,i[5]=(1-(p+f))*C,i[6]=(m+M)*C,i[7]=0,i[8]=(g+v)*E,i[9]=(m-M)*E,i[10]=(1-(p+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Wi.set(i[0],i[1],i[2]).length();const o=Wi.set(i[4],i[5],i[6]).length(),a=Wi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],gn.copy(this);const c=1/s,h=1/o,u=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,e.setFromRotationMatrix(gn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=kn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),p=(n+i)/(n-i);let d,g;if(a===kn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Bs)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=kn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),p=(e+t)*c,d=(n+i)*h;let g,_;if(a===kn)g=(o+s)*u,_=-2*u;else if(a===Bs)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Wi=new N,gn=new ve,zd=new N(0,0,0),Gd=new N(1,1,1),jn=new N,ls=new N,Je=new N,zl=new ve,Gl=new Ii;class Js{constructor(t=0,e=0,n=0,i=Js.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],p=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Js.DEFAULT_ORDER="XYZ";class mh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kd=0;const kl=new N,Xi=new Ii,In=new ve,cs=new N,Ar=new N,Hd=new N,Vd=new Ii,Hl=new N(1,0,0),Vl=new N(0,1,0),Wl=new N(0,0,1),Wd={type:"added"},Xd={type:"removed"};class Ee extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new N,e=new Js,n=new Ii,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new Xt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(Vl,t)}rotateZ(t){return this.rotateOnAxis(Wl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(Vl,t)}translateZ(t){return this.translateOnAxis(Wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cs.copy(t):cs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Ar,cs,this.up):In.lookAt(cs,Ar,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Xi.setFromRotationMatrix(In),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,Hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new N(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new N,Un=new N,Ta=new N,Nn=new N,qi=new N,Yi=new N,Xl=new N,ba=new N,wa=new N,Aa=new N;let hs=!1;class xn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){vn.subVectors(i,e),Un.subVectors(n,e),Ta.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Un),l=vn.dot(Ta),c=Un.dot(Un),h=Un.dot(Ta),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const p=1/u,d=(c*l-a*h)*p,g=(o*h-a*l)*p;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(t,e,n,i,s,o,a,l){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Un.subVectors(t,e),vn.cross(Un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),vn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;qi.subVectors(i,n),Yi.subVectors(s,n),ba.subVectors(t,n);const l=qi.dot(ba),c=Yi.dot(ba);if(l<=0&&c<=0)return e.copy(n);wa.subVectors(t,i);const h=qi.dot(wa),u=Yi.dot(wa);if(h>=0&&u<=h)return e.copy(i);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(qi,o);Aa.subVectors(t,s);const d=qi.dot(Aa),g=Yi.dot(Aa);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Yi,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Xl.subVectors(s,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Xl,a);const f=1/(m+_+p);return o=_*f,a=p*f,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},us={h:0,s:0,l:0};function Ra(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=Pd(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ra(o,s,t+1/3),this.g=Ra(o,s,t),this.b=Ra(o,s,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=Re){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=_h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return ee.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Ne(Ue.r*255,0,255))*65536+Math.round(Ne(Ue.g*255,0,255))*256+Math.round(Ne(Ue.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,s=Ue.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Re){ee.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(us);const n=pa(Zn.h,us.h,e),i=pa(Zn.s,us.s,e),s=pa(Zn.l,us.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new yt;yt.NAMES=_h;let qd=0;class yr extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=or,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Ja,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Jr extends yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new N,ds=new Ft;class Rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dl&&(t.usage=this.usage),t}}class gh extends Rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vh extends Rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends Rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yd=0;const hn=new ve,Ca=new Ee,ji=new N,Qe=new $r,Rr=new $r,Ae=new N;class Sn extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uh(t)?vh:gh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Qe.min,Rr.min),Qe.expandByPoint(Ae),Ae.addVectors(Qe.max,Rr.max),Qe.expandByPoint(Ae)):(Qe.expandByPoint(Rr.min),Qe.expandByPoint(Rr.max))}Qe.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ae.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ae.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(t,c),Ae.add(ji)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new N,h[T]=new N;const u=new N,p=new N,d=new N,g=new Ft,_=new Ft,m=new Ft,f=new N,M=new N;function v(T,k,G){u.fromArray(i,T*3),p.fromArray(i,k*3),d.fromArray(i,G*3),g.fromArray(o,T*2),_.fromArray(o,k*2),m.fromArray(o,G*2),p.sub(u),d.sub(u),_.sub(g),m.sub(g);const K=1/(_.x*m.y-m.x*_.y);isFinite(K)&&(f.copy(p).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(K),M.copy(d).multiplyScalar(_.x).addScaledVector(p,-m.x).multiplyScalar(K),c[T].add(f),c[k].add(f),c[G].add(f),h[T].add(M),h[k].add(M),h[G].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let T=0,k=S.length;T<k;++T){const G=S[T],K=G.start,D=G.count;for(let B=K,H=K+D;B<H;B+=3)v(n[B+0],n[B+1],n[B+2])}const A=new N,C=new N,E=new N,U=new N;function x(T){E.fromArray(s,T*3),U.copy(E);const k=c[T];A.copy(k),A.sub(E.multiplyScalar(E.dot(k))).normalize(),C.crossVectors(U,k);const K=C.dot(h[T])<0?-1:1;l[T*4]=A.x,l[T*4+1]=A.y,l[T*4+2]=A.z,l[T*4+3]=K}for(let T=0,k=S.length;T<k;++T){const G=S[T],K=G.start,D=G.count;for(let B=K,H=K+D;B<H;B+=3)x(n[B+0]),x(n[B+1]),x(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let p=0,d=t.count;p<d;p+=3){const g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=e.count;p<d;p+=3)i.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let f=0;f<h;f++)p[g++]=c[d++]}return new Rn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Sn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const p=c[h],d=t(p,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new ve,_i=new Eo,fs=new $s,Yl=new N,Zi=new N,Ki=new N,$i=new N,Pa=new N,ps=new N,ms=new Ft,_s=new Ft,gs=new Ft,jl=new N,Zl=new N,Kl=new N,vs=new N,xs=new N;class dt extends Ee{constructor(t=new Sn,e=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){ps.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Pa.fromBufferAttribute(u,t),o?ps.addScaledVector(Pa,h):ps.addScaledVector(Pa.sub(e),h))}e.add(ps)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(s),_i.copy(t.ray).recast(t.near),!(fs.containsPoint(_i.origin)===!1&&(_i.intersectSphere(fs,Yl)===null||_i.origin.distanceToSquared(Yl)>(t.far-t.near)**2))&&(ql.copy(s).invert(),_i.copy(t.ray).applyMatrix4(ql),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,A=v;S<A;S+=3){const C=a.getX(S),E=a.getX(S+1),U=a.getX(S+2);i=Ms(this,f,t,n,c,h,u,C,E,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const M=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);i=Ms(this,o,t,n,c,h,u,M,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],M=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,A=v;S<A;S+=3){const C=S,E=S+1,U=S+2;i=Ms(this,f,t,n,c,h,u,C,E,U),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const M=m,v=m+1,S=m+2;i=Ms(this,o,t,n,c,h,u,M,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function jd(r,t,e,n,i,s,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===oi,a),l===null)return null;xs.copy(a),xs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(xs);return c<e.near||c>e.far?null:{distance:c,point:xs.clone(),object:r}}function Ms(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Zi),r.getVertexPosition(l,Ki),r.getVertexPosition(c,$i);const h=jd(r,t,e,n,Zi,Ki,$i,vs);if(h){i&&(ms.fromBufferAttribute(i,a),_s.fromBufferAttribute(i,l),gs.fromBufferAttribute(i,c),h.uv=xn.getInterpolation(vs,Zi,Ki,$i,ms,_s,gs,new Ft)),s&&(ms.fromBufferAttribute(s,a),_s.fromBufferAttribute(s,l),gs.fromBufferAttribute(s,c),h.uv1=xn.getInterpolation(vs,Zi,Ki,$i,ms,_s,gs,new Ft),h.uv2=h.uv1),o&&(jl.fromBufferAttribute(o,a),Zl.fromBufferAttribute(o,l),Kl.fromBufferAttribute(o,c),h.normal=xn.getInterpolation(vs,Zi,Ki,$i,jl,Zl,Kl,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};xn.getNormal(Zi,Ki,$i,u.normal),h.face=u}return h}class wt extends Sn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let p=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function g(_,m,f,M,v,S,A,C,E,U,x){const T=S/E,k=A/U,G=S/2,K=A/2,D=C/2,B=E+1,H=U+1;let Z=0,$=0;const Q=new N;for(let P=0;P<H;P++){const R=P*k-K;for(let X=0;X<B;X++){const O=X*T-G;Q[_]=O*M,Q[m]=R*v,Q[f]=D,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[f]=C>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(X/E),u.push(1-P/U),Z+=1}}for(let P=0;P<U;P++)for(let R=0;R<E;R++){const X=p+R+B*P,O=p+R+B*(P+1),W=p+(R+1)+B*(P+1),J=p+(R+1)+B*P;l.push(X,O,J),l.push(O,W,J),$+=6}a.addGroup(d,$,x),d+=$,p+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(r){const t={};for(let e=0;e<r.length;e++){const n=mr(r[e]);for(const i in n)t[i]=n[i]}return t}function Zd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function xh(r){return r.getRenderTarget()===null?r.outputColorSpace:ee.workingColorSpace}const Kd={clone:mr,merge:Be};var $d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=Zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mh extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class He extends Mh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Qd extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new He(Ji,Qi,t,e);i.layers=this.layers,this.add(i);const s=new He(Ji,Qi,t,e);s.layers=this.layers,this.add(s);const o=new He(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const a=new He(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const l=new He(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new He(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yh extends Xe{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:dr,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tf extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ur("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ai?Re:fn),this.texture=new yh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new wt(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:ni});s.uniforms.tEquirect.value=e;const o=new dt(i,s),a=e.minFilter;return e.minFilter===zr&&(e.minFilter=dn),new Qd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const La=new N,ef=new N,nf=new Xt;class Kn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=La.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nf.getNormalMatrix(t),i=this.coplanarPoint(La).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new $s,ys=new N;class To{constructor(t=new Kn,e=new Kn,n=new Kn,i=new Kn,s=new Kn,o=new Kn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],p=i[7],d=i[8],g=i[9],_=i[10],m=i[11],f=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,p-c,m-d,S-f).normalize(),n[1].setComponents(l+s,p+c,m+d,S+f).normalize(),n[2].setComponents(l+o,p+h,m+g,S+M).normalize(),n[3].setComponents(l-o,p-h,m-g,S-M).normalize(),n[4].setComponents(l-a,p-u,m-_,S-v).normalize(),e===kn)n[5].setComponents(l+a,p+u,m+_,S+v).normalize();else if(e===Bs)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ys.x=i.normal.x>0?t.max.x:t.min.x,ys.y=i.normal.y>0?t.max.y:t.min.y,ys.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function rf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,p=c.usage,d=u.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,u,p),c.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,h,u){const p=h.array,d=h._updateRange,g=h.updateRanges;if(r.bindBuffer(u,c),d.count===-1&&g.length===0&&r.bufferSubData(u,0,p),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];e?r.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):r.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(u,d.offset*p.BYTES_PER_ELEMENT,p,d.offset,d.count):r.bufferSubData(u,d.offset*p.BYTES_PER_ELEMENT,p.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class kr extends Sn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,p=e/l,d=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const M=f*p-o;for(let v=0;v<c;v++){const S=v*u-s;g.push(S,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const v=M+c*f,S=M+c*(f+1),A=M+1+c*(f+1),C=M+1+c*f;d.push(v,S,C),d.push(S,A,C)}this.setIndex(d),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.width,t.height,t.widthSegments,t.heightSegments)}}var sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Om=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:sf,alphahash_pars_fragment:af,alphamap_fragment:of,alphamap_pars_fragment:lf,alphatest_fragment:cf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:_f,bsdfs:gf,iridescence_fragment:vf,bumpmap_pars_fragment:xf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:Ef,color_fragment:Tf,color_pars_fragment:bf,color_pars_vertex:wf,color_vertex:Af,common:Rf,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Lf,displacementmap_vertex:Df,emissivemap_fragment:If,emissivemap_pars_fragment:Uf,colorspace_fragment:Nf,colorspace_pars_fragment:Of,envmap_fragment:Ff,envmap_common_pars_fragment:Bf,envmap_pars_fragment:zf,envmap_pars_vertex:Gf,envmap_physical_pars_fragment:Jf,envmap_vertex:kf,fog_vertex:Hf,fog_pars_vertex:Vf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_fragment:Yf,lightmap_pars_fragment:jf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Kf,lights_pars_begin:$f,lights_toon_fragment:Qf,lights_toon_pars_fragment:tp,lights_phong_fragment:ep,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:rp,lights_fragment_begin:sp,lights_fragment_maps:ap,lights_fragment_end:op,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:dp,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:gp,morphcolor_vertex:vp,morphnormal_vertex:xp,morphtarget_pars_vertex:Mp,morphtarget_vertex:yp,normal_fragment_begin:Sp,normal_fragment_maps:Ep,normal_pars_fragment:Tp,normal_pars_vertex:bp,normal_vertex:wp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Dp,packing:Ip,premultiplied_alpha_fragment:Up,project_vertex:Np,dithering_fragment:Op,dithering_pars_fragment:Fp,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:Gp,shadowmap_pars_vertex:kp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Vp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:Yp,specularmap_fragment:jp,specularmap_pars_fragment:Zp,tonemapping_fragment:Kp,tonemapping_pars_fragment:$p,transmission_fragment:Jp,transmission_pars_fragment:Qp,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,worldpos_vertex:im,background_vert:rm,background_frag:sm,backgroundCube_vert:am,backgroundCube_frag:om,cube_vert:lm,cube_frag:cm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:_m,linedashed_frag:gm,meshbasic_vert:vm,meshbasic_frag:xm,meshlambert_vert:Mm,meshlambert_frag:ym,meshmatcap_vert:Sm,meshmatcap_frag:Em,meshnormal_vert:Tm,meshnormal_frag:bm,meshphong_vert:wm,meshphong_frag:Am,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Dm,points_frag:Im,shadow_vert:Um,shadow_frag:Nm,sprite_vert:Om,sprite_frag:Fm},ut={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},bn={basic:{uniforms:Be([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Be([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new yt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Be([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Be([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Be([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new yt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Be([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Be([ut.points,ut.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Be([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Be([ut.common,ut.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Be([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Be([ut.sprite,ut.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Be([ut.common,ut.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Be([ut.lights,ut.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};bn.physical={uniforms:Be([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Ss={r:0,b:0,g:0};function Bm(r,t,e,n,i,s,o){const a=new yt(0);let l=s===!0?0:1,c,h,u=null,p=0,d=null;function g(m,f){let M=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),M=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zs)?(h===void 0&&(h=new dt(new wt(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:mr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ee.getTransfer(v.colorSpace)!==re,(u!==v||p!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,p=v.version,d=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new dt(new kr(2,2),new Ui({name:"BackgroundMaterial",uniforms:mr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,p=v.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Ss,xh(r)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function zm(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function u(D,B,H,Z,$){let Q=!1;if(o){const P=_(Z,H,B);c!==P&&(c=P,d(c.object)),Q=f(D,Z,H,$),Q&&M(D,Z,H,$)}else{const P=B.wireframe===!0;(c.geometry!==Z.id||c.program!==H.id||c.wireframe!==P)&&(c.geometry=Z.id,c.program=H.id,c.wireframe=P,Q=!0)}$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,U(D,B,H,Z),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function p(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,B,H){const Z=H.wireframe===!0;let $=a[D.id];$===void 0&&($={},a[D.id]=$);let Q=$[B.id];Q===void 0&&(Q={},$[B.id]=Q);let P=Q[Z];return P===void 0&&(P=m(p()),Q[Z]=P),P}function m(D){const B=[],H=[],Z=[];for(let $=0;$<i;$++)B[$]=0,H[$]=0,Z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:Z,object:D,attributes:{},index:null}}function f(D,B,H,Z){const $=c.attributes,Q=B.attributes;let P=0;const R=H.getAttributes();for(const X in R)if(R[X].location>=0){const W=$[X];let J=Q[X];if(J===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),W===void 0||W.attribute!==J||J&&W.data!==J.data)return!0;P++}return c.attributesNum!==P||c.index!==Z}function M(D,B,H,Z){const $={},Q=B.attributes;let P=0;const R=H.getAttributes();for(const X in R)if(R[X].location>=0){let W=Q[X];W===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(W=D.instanceColor));const J={};J.attribute=W,W&&W.data&&(J.data=W.data),$[X]=J,P++}c.attributes=$,c.attributesNum=P,c.index=Z}function v(){const D=c.newAttributes;for(let B=0,H=D.length;B<H;B++)D[B]=0}function S(D){A(D,0)}function A(D,B){const H=c.newAttributes,Z=c.enabledAttributes,$=c.attributeDivisors;H[D]=1,Z[D]===0&&(r.enableVertexAttribArray(D),Z[D]=1),$[D]!==B&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),$[D]=B)}function C(){const D=c.newAttributes,B=c.enabledAttributes;for(let H=0,Z=B.length;H<Z;H++)B[H]!==D[H]&&(r.disableVertexAttribArray(H),B[H]=0)}function E(D,B,H,Z,$,Q,P){P===!0?r.vertexAttribIPointer(D,B,H,$,Q):r.vertexAttribPointer(D,B,H,Z,$,Q)}function U(D,B,H,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const $=Z.attributes,Q=H.getAttributes(),P=B.defaultAttributeValues;for(const R in Q){const X=Q[R];if(X.location>=0){let O=$[R];if(O===void 0&&(R==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),R==="instanceColor"&&D.instanceColor&&(O=D.instanceColor)),O!==void 0){const W=O.normalized,J=O.itemSize,at=e.get(O);if(at===void 0)continue;const tt=at.buffer,ht=at.type,gt=at.bytesPerElement,mt=n.isWebGL2===!0&&(ht===r.INT||ht===r.UNSIGNED_INT||O.gpuType===eh);if(O.isInterleavedBufferAttribute){const Et=O.data,F=Et.stride,Zt=O.offset;if(Et.isInstancedInterleavedBuffer){for(let lt=0;lt<X.locationSize;lt++)A(X.location+lt,Et.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let lt=0;lt<X.locationSize;lt++)S(X.location+lt);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let lt=0;lt<X.locationSize;lt++)E(X.location+lt,J/X.locationSize,ht,W,F*gt,(Zt+J/X.locationSize*lt)*gt,mt)}else{if(O.isInstancedBufferAttribute){for(let Et=0;Et<X.locationSize;Et++)A(X.location+Et,O.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let Et=0;Et<X.locationSize;Et++)S(X.location+Et);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let Et=0;Et<X.locationSize;Et++)E(X.location+Et,J/X.locationSize,ht,W,J*gt,J/X.locationSize*Et*gt,mt)}}else if(P!==void 0){const W=P[R];if(W!==void 0)switch(W.length){case 2:r.vertexAttrib2fv(X.location,W);break;case 3:r.vertexAttrib3fv(X.location,W);break;case 4:r.vertexAttrib4fv(X.location,W);break;default:r.vertexAttrib1fv(X.location,W)}}}}C()}function x(){G();for(const D in a){const B=a[D];for(const H in B){const Z=B[H];for(const $ in Z)g(Z[$].object),delete Z[$];delete B[H]}delete a[D]}}function T(D){if(a[D.id]===void 0)return;const B=a[D.id];for(const H in B){const Z=B[H];for(const $ in Z)g(Z[$].object),delete Z[$];delete B[H]}delete a[D.id]}function k(D){for(const B in a){const H=a[B];if(H[D.id]===void 0)continue;const Z=H[D.id];for(const $ in Z)g(Z[$].object),delete Z[$];delete H[D.id]}}function G(){K(),h=!0,c!==l&&(c=l,d(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:K,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function Gm(r,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,u){r.drawArrays(s,h,u),e.update(u,s,1)}function l(h,u,p){if(p===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,h,u,p),e.update(u,s,p)}function c(h,u,p){if(p===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<p;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(s,h,0,u,0,p);let g=0;for(let _=0;_<p;_++)g+=u[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function km(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,S=o||t.has("OES_texture_float"),A=v&&S,C=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:C}}function Hm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Kn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const d=u.length!==0||p||n!==0||i;return i=p,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,v=M*4;let S=f.clippingState||null;l.value=S,S=h(g,p,v,d);for(let A=0;A!==v;++A)S[A]=e[A];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=d+_*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=d;v!==_;++v,S+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Vm(r){let t=new WeakMap;function e(o,a){return a===Qa?o.mapping=dr:a===to&&(o.mapping=fr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qa||a===to)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tf(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Eh extends Mh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nr=4,$l=[.125,.215,.35,.446,.526,.582],Ei=20,Da=new Eh,Jl=new yt;let Ia=null,Ua=0,Na=0;const Mi=(1+Math.sqrt(5))/2,tr=1/Mi,Ql=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Mi,tr),new N(0,Mi,-tr),new N(tr,0,Mi),new N(-tr,0,Mi),new N(Mi,tr,0),new N(-Mi,tr,0)];class tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,Ua,Na),t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dr||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Gr,format:yn,colorSpace:Hn,depthBuffer:!1},i=ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(s)),this._blurMaterial=Xm(s,t,e)}return i}_compileMaterial(t){const e=new dt(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,i){const a=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Jl),h.toneMapping=ii,h.autoClear=!1;const d=new Jr({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new dt(new wt,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Jl),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;Es(i,M*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===dr||t.mapping===fr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Es(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ql[(i-1)%Ql.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[i],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ei-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Ei;m>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const f=[];let M=0;for(let E=0;E<Ei;++E){const U=E/_,x=Math.exp(-U*U/2);f.push(x),E===0?M+=x:E<m&&(M+=2*x)}for(let E=0;E<f.length;E++)f[E]=f[E]/M;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const S=this._sizeLods[i],A=3*S*(i>v-nr?i-v+nr:0),C=4*(this._cubeSize-S);Es(e,A,C,3*S,2*S),l.setRenderTarget(e),l.render(u,Da)}}function Wm(r){const t=[],e=[],n=[];let i=r;const s=r-nr+1+$l.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-nr?l=$l[o-r+nr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*d),v=new Float32Array(m*g*d),S=new Float32Array(f*g*d);for(let C=0;C<d;C++){const E=C%3*2/3-1,U=C>2?0:-1,x=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];M.set(x,_*g*C),v.set(p,m*g*C);const T=[C,C,C,C,C,C];S.set(T,f*g*C)}const A=new Sn;A.setAttribute("position",new Rn(M,_)),A.setAttribute("uv",new Rn(v,m)),A.setAttribute("faceIndex",new Rn(S,f)),t.push(A),i>nr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ec(r,t,e){const n=new Di(r,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Xm(r,t,e){const n=new Float32Array(Ei),i=new N(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function nc(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ic(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qa||l===to,h=l===dr||l===fr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new tc(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new tc(r));const p=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ym(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jm(r,t,e,n){const i={},s=new WeakMap;function o(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}p.removeEventListener("dispose",o),delete i[p.id];const d=s.get(p);d&&(t.remove(d),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,e.memory.geometries++),p}function l(u){const p=u.attributes;for(const g in p)t.update(p[g],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(u){const p=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let v=0,S=M.length;v<S;v+=3){const A=M[v+0],C=M[v+1],E=M[v+2];p.push(A,C,C,E,E,A)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const A=v+0,C=v+1,E=v+2;p.push(A,C,C,E,E,A)}}else return;const m=new(uh(p)?vh:gh)(p,1);m.version=_;const f=s.get(u);f&&t.remove(f),s.set(u,m)}function h(u){const p=s.get(u);if(p){const d=u.index;d!==null&&p.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Zm(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){r.drawElements(s,g,a,d*l),e.update(g,s,1)}function u(d,g,_){if(_===0)return;let m,f;if(i)m=r,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,a,d*l,_),e.update(g,s,_)}function p(d,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(d[f]/l,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,a,d,0,_);let f=0;for(let M=0;M<_;M++)f+=g[M];e.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function Km(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $m(r,t){return r[0]-t[0]}function Jm(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Qm(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new ae,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==_){let B=function(){K.dispose(),s.delete(h),h.removeEventListener("dispose",B)};var d=B;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let x=0;v===!0&&(x=1),S===!0&&(x=2),A===!0&&(x=3);let T=h.attributes.position.count*x,k=1;T>t.maxTextureSize&&(k=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const G=new Float32Array(T*k*4*_),K=new ph(G,T,k,_);K.type=Jn,K.needsUpdate=!0;const D=x*4;for(let H=0;H<_;H++){const Z=C[H],$=E[H],Q=U[H],P=T*k*4*H;for(let R=0;R<Z.count;R++){const X=R*D;v===!0&&(o.fromBufferAttribute(Z,R),G[P+X+0]=o.x,G[P+X+1]=o.y,G[P+X+2]=o.z,G[P+X+3]=0),S===!0&&(o.fromBufferAttribute($,R),G[P+X+4]=o.x,G[P+X+5]=o.y,G[P+X+6]=o.z,G[P+X+7]=0),A===!0&&(o.fromBufferAttribute(Q,R),G[P+X+8]=o.x,G[P+X+9]=o.y,G[P+X+10]=o.z,G[P+X+11]=Q.itemSize===4?o.w:1)}}m={count:_,texture:K,size:new Ft(T,k)},s.set(h,m),h.addEventListener("dispose",B)}let f=0;for(let v=0;v<p.length;v++)f+=p[v];const M=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",M),u.getUniforms().setValue(r,"morphTargetInfluences",p),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=p===void 0?0:p.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const A=_[S];A[0]=S,A[1]=p[S]}_.sort(Jm);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort($m);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const A=a[S],C=A[0],E=A[1];C!==Number.MAX_SAFE_INTEGER&&E?(m&&h.getAttribute("morphTarget"+S)!==m[C]&&h.setAttribute("morphTarget"+S,m[C]),f&&h.getAttribute("morphNormal"+S)!==f[C]&&h.setAttribute("morphNormal"+S,f[C]),i[S]=E,M+=E):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const v=h.morphTargetsRelative?1:1-M;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function t_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Th extends Xe{constructor(t,e,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:wi,h!==wi&&h!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wi&&(n=$n),n===void 0&&h===pr&&(n=bi),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bh=new Xe,wh=new Th(1,1);wh.compareFunction=hh;const Ah=new ph,Rh=new Fd,Ch=new yh,rc=[],sc=[],ac=new Float32Array(16),oc=new Float32Array(9),lc=new Float32Array(4);function Sr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=rc[i];if(s===void 0&&(s=new Float32Array(i),rc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Te(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function be(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Qs(r,t){let e=sc[t];e===void 0&&(e=new Int32Array(t),sc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function e_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function n_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;r.uniform2fv(this.addr,t),be(e,t)}}function i_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;r.uniform3fv(this.addr,t),be(e,t)}}function r_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;r.uniform4fv(this.addr,t),be(e,t)}}function s_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Te(e,n))return;lc.set(n),r.uniformMatrix2fv(this.addr,!1,lc),be(e,n)}}function a_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Te(e,n))return;oc.set(n),r.uniformMatrix3fv(this.addr,!1,oc),be(e,n)}}function o_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Te(e,n))return;ac.set(n),r.uniformMatrix4fv(this.addr,!1,ac),be(e,n)}}function l_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function c_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;r.uniform2iv(this.addr,t),be(e,t)}}function h_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;r.uniform3iv(this.addr,t),be(e,t)}}function u_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;r.uniform4iv(this.addr,t),be(e,t)}}function d_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function f_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;r.uniform2uiv(this.addr,t),be(e,t)}}function p_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;r.uniform3uiv(this.addr,t),be(e,t)}}function m_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;r.uniform4uiv(this.addr,t),be(e,t)}}function __(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?wh:bh;e.setTexture2D(t||s,i)}function g_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rh,i)}function v_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ch,i)}function x_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ah,i)}function M_(r){switch(r){case 5126:return e_;case 35664:return n_;case 35665:return i_;case 35666:return r_;case 35674:return s_;case 35675:return a_;case 35676:return o_;case 5124:case 35670:return l_;case 35667:case 35671:return c_;case 35668:case 35672:return h_;case 35669:case 35673:return u_;case 5125:return d_;case 36294:return f_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return x_}}function y_(r,t){r.uniform1fv(this.addr,t)}function S_(r,t){const e=Sr(t,this.size,2);r.uniform2fv(this.addr,e)}function E_(r,t){const e=Sr(t,this.size,3);r.uniform3fv(this.addr,e)}function T_(r,t){const e=Sr(t,this.size,4);r.uniform4fv(this.addr,e)}function b_(r,t){const e=Sr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function w_(r,t){const e=Sr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function A_(r,t){const e=Sr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function R_(r,t){r.uniform1iv(this.addr,t)}function C_(r,t){r.uniform2iv(this.addr,t)}function P_(r,t){r.uniform3iv(this.addr,t)}function L_(r,t){r.uniform4iv(this.addr,t)}function D_(r,t){r.uniform1uiv(this.addr,t)}function I_(r,t){r.uniform2uiv(this.addr,t)}function U_(r,t){r.uniform3uiv(this.addr,t)}function N_(r,t){r.uniform4uiv(this.addr,t)}function O_(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);Te(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||bh,s[o])}function F_(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);Te(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Rh,s[o])}function B_(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);Te(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ch,s[o])}function z_(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);Te(n,s)||(r.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ah,s[o])}function G_(r){switch(r){case 5126:return y_;case 35664:return S_;case 35665:return E_;case 35666:return T_;case 35674:return b_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return R_;case 35667:case 35671:return C_;case 35668:case 35672:return P_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return I_;case 36295:return U_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}class k_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=M_(e.type)}}class H_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G_(e.type)}}class V_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function cc(r,t){r.seq.push(t),r.map[t.id]=t}function W_(r,t,e){const n=r.name,i=n.length;for(Oa.lastIndex=0;;){const s=Oa.exec(n),o=Oa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){cc(e,c===void 0?new k_(a,r,t):new H_(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new V_(a),cc(e,u)),e=u}}}class Ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);W_(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function hc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const X_=37297;let q_=0;function Y_(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function j_(r){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(r);let n;switch(t===e?n="":t===Fs&&e===Os?n="LinearDisplayP3ToLinearSRGB":t===Os&&e===Fs&&(n="LinearSRGBToLinearDisplayP3"),r){case Hn:case Ks:return[n,"LinearTransferOETF"];case Re:case So:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function uc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Y_(r.getShaderSource(t),o)}else return i}function Z_(r,t){const e=j_(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function K_(r,t){let e;switch(t){case ad:e="Linear";break;case od:e="Reinhard";break;case ld:e="OptimizedCineon";break;case Qc:e="ACESFilmic";break;case hd:e="AgX";break;case cd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ir).join(`
`)}function J_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ir).join(`
`)}function Q_(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ir(r){return r!==""}function dc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(r){return r.replace(eg,ig)}const ng=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ig(r,t){let e=Ht[t];if(e===void 0){const n=ng.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ro(e)}const rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(r){return r.replace(rg,sg)}function sg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function mc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ag(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Kc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===$c?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function og(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case dr:case fr:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case fr:t="ENVMAP_MODE_REFRACTION";break}return t}function cg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Jc:t="ENVMAP_BLENDING_MULTIPLY";break;case rd:t="ENVMAP_BLENDING_MIX";break;case sd:t="ENVMAP_BLENDING_ADD";break}return t}function hg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ug(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ag(e),c=og(e),h=lg(e),u=cg(e),p=hg(e),d=e.isWebGL2?"":$_(e),g=J_(e),_=Q_(s),m=i.createProgram();let f,M,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ir).join(`
`),f.length>0&&(f+=`
`),M=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ir).join(`
`),M.length>0&&(M+=`
`)):(f=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),M=[d,mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ii?K_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Z_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),o=ro(o),o=dc(o,e),o=fc(o,e),a=ro(a),a=dc(a,e),a=fc(a,e),o=pc(o),a=pc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=v+f+o,A=v+M+a,C=hc(i,i.VERTEX_SHADER,S),E=hc(i,i.FRAGMENT_SHADER,A);i.attachShader(m,C),i.attachShader(m,E),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function U(G){if(r.debug.checkShaderErrors){const K=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(C).trim(),B=i.getShaderInfoLog(E).trim();let H=!0,Z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,C,E);else{const $=uc(i,C,"vertex"),Q=uc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+$+`
`+Q)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(D===""||B==="")&&(Z=!1);Z&&(G.diagnostics={runnable:H,programLog:K,vertexShader:{log:D,prefix:f},fragmentShader:{log:B,prefix:M}})}i.deleteShader(C),i.deleteShader(E),x=new Ps(i,m),T=tg(i,m)}let x;this.getUniforms=function(){return x===void 0&&U(this),x};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(m,X_)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=E,this}let dg=0;class fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pg(t),e.set(t,n)),n}}class pg{constructor(t){this.id=dg++,this.code=t,this.usedTimes=0}}function mg(r,t,e,n,i,s,o){const a=new mh,l=new fg,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,p=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,T,k,G,K){const D=G.fog,B=K.geometry,H=x.isMeshStandardMaterial?G.environment:null,Z=(x.isMeshStandardMaterial?e:t).get(x.envMap||H),$=Z&&Z.mapping===Zs?Z.image.height:null,Q=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const P=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,R=P!==void 0?P.length:0;let X=0;B.morphAttributes.position!==void 0&&(X=1),B.morphAttributes.normal!==void 0&&(X=2),B.morphAttributes.color!==void 0&&(X=3);let O,W,J,at;if(Q){const me=bn[Q];O=me.vertexShader,W=me.fragmentShader}else O=x.vertexShader,W=x.fragmentShader,l.update(x),J=l.getVertexShaderID(x),at=l.getFragmentShaderID(x);const tt=r.getRenderTarget(),ht=K.isInstancedMesh===!0,gt=K.isBatchedMesh===!0,mt=!!x.map,Et=!!x.matcap,F=!!Z,Zt=!!x.aoMap,lt=!!x.lightMap,Tt=!!x.bumpMap,_t=!!x.normalMap,qt=!!x.displacementMap,Dt=!!x.emissiveMap,w=!!x.metalnessMap,y=!!x.roughnessMap,V=x.anisotropy>0,st=x.clearcoat>0,nt=x.iridescence>0,it=x.sheen>0,bt=x.transmission>0,ft=V&&!!x.anisotropyMap,Mt=st&&!!x.clearcoatMap,Pt=st&&!!x.clearcoatNormalMap,Bt=st&&!!x.clearcoatRoughnessMap,et=nt&&!!x.iridescenceMap,Kt=nt&&!!x.iridescenceThicknessMap,Gt=it&&!!x.sheenColorMap,Nt=it&&!!x.sheenRoughnessMap,Ct=!!x.specularMap,vt=!!x.specularColorMap,L=!!x.specularIntensityMap,ot=bt&&!!x.transmissionMap,At=bt&&!!x.thicknessMap,St=!!x.gradientMap,rt=!!x.alphaMap,I=x.alphaTest>0,ct=!!x.alphaHash,pt=!!x.extensions,It=!!B.attributes.uv1,Lt=!!B.attributes.uv2,Yt=!!B.attributes.uv3;let jt=ii;return x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(jt=r.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:O,fragmentShader:W,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:at,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:gt,instancing:ht,instancingColor:ht&&K.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:tt===null?r.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Hn,map:mt,matcap:Et,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:$,aoMap:Zt,lightMap:lt,bumpMap:Tt,normalMap:_t,displacementMap:p&&qt,emissiveMap:Dt,normalMapObjectSpace:_t&&x.normalMapType===Sd,normalMapTangentSpace:_t&&x.normalMapType===ch,metalnessMap:w,roughnessMap:y,anisotropy:V,anisotropyMap:ft,clearcoat:st,clearcoatMap:Mt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Bt,iridescence:nt,iridescenceMap:et,iridescenceThicknessMap:Kt,sheen:it,sheenColorMap:Gt,sheenRoughnessMap:Nt,specularMap:Ct,specularColorMap:vt,specularIntensityMap:L,transmission:bt,transmissionMap:ot,thicknessMap:At,gradientMap:St,opaque:x.transparent===!1&&x.blending===or,alphaMap:rt,alphaTest:I,alphaHash:ct,combine:x.combine,mapUv:mt&&_(x.map.channel),aoMapUv:Zt&&_(x.aoMap.channel),lightMapUv:lt&&_(x.lightMap.channel),bumpMapUv:Tt&&_(x.bumpMap.channel),normalMapUv:_t&&_(x.normalMap.channel),displacementMapUv:qt&&_(x.displacementMap.channel),emissiveMapUv:Dt&&_(x.emissiveMap.channel),metalnessMapUv:w&&_(x.metalnessMap.channel),roughnessMapUv:y&&_(x.roughnessMap.channel),anisotropyMapUv:ft&&_(x.anisotropyMap.channel),clearcoatMapUv:Mt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(x.sheenRoughnessMap.channel),specularMapUv:Ct&&_(x.specularMap.channel),specularColorMapUv:vt&&_(x.specularColorMap.channel),specularIntensityMapUv:L&&_(x.specularIntensityMap.channel),transmissionMapUv:ot&&_(x.transmissionMap.channel),thicknessMapUv:At&&_(x.thicknessMap.channel),alphaMapUv:rt&&_(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(_t||V),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Lt,vertexUv3s:Yt,pointsUvs:K.isPoints===!0&&!!B.attributes.uv&&(mt||rt),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:X,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:jt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:mt&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gn,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:pt&&x.extensions.derivatives===!0,extensionFragDepth:pt&&x.extensions.fragDepth===!0,extensionDrawBuffers:pt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)T.push(k),T.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(M(T,x),v(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function M(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function S(x){const T=g[x.type];let k;if(T){const G=bn[T];k=Kd.clone(G.uniforms)}else k=x.uniforms;return k}function A(x,T){let k;for(let G=0,K=c.length;G<K;G++){const D=c[G];if(D.cacheKey===T){k=D,++k.usedTimes;break}}return k===void 0&&(k=new ug(r,T,x,s),c.push(k)),k}function C(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:A,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:U}}function _g(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function gg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function _c(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function gc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,p,d,g,_,m){let f=r[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,p,d,g,_,m){const f=o(u,p,d,g,_,m);d.transmission>0?n.push(f):d.transparent===!0?i.push(f):e.push(f)}function l(u,p,d,g,_,m){const f=o(u,p,d,g,_,m);d.transmission>0?n.unshift(f):d.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,p){e.length>1&&e.sort(u||gg),n.length>1&&n.sort(p||_c),i.length>1&&i.sort(p||_c)}function h(){for(let u=t,p=r.length;u<p;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function vg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new gc,r.set(n,[o])):i>=s.length?(o=new gc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function xg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new yt};break;case"SpotLight":e={position:new N,direction:new N,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function Mg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let yg=0;function Sg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Eg(r,t){const e=new xg,n=Mg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new N);const s=new N,o=new ve,a=new ve;function l(h,u){let p=0,d=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,m=0,f=0,M=0,v=0,S=0,A=0,C=0,E=0,U=0,x=0;h.sort(Sg);const T=u===!0?Math.PI:1;for(let G=0,K=h.length;G<K;G++){const D=h[G],B=D.color,H=D.intensity,Z=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)p+=B.r*H*T,d+=B.g*H*T,g+=B.b*H*T;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(D.sh.coefficients[Q],H);x++}else if(D.isDirectionalLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const P=D.shadow,R=n.get(D);R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,i.directionalShadow[_]=R,i.directionalShadowMap[_]=$,i.directionalShadowMatrix[_]=D.shadow.matrix,S++}i.directional[_]=Q,_++}else if(D.isSpotLight){const Q=e.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(B).multiplyScalar(H*T),Q.distance=Z,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,i.spot[f]=Q;const P=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,P.updateMatrices(D),D.castShadow&&U++),i.spotLightMatrix[f]=P.matrix,D.castShadow){const R=n.get(D);R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,i.spotShadow[f]=R,i.spotShadowMap[f]=$,C++}f++}else if(D.isRectAreaLight){const Q=e.get(D);Q.color.copy(B).multiplyScalar(H),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),i.rectArea[M]=Q,M++}else if(D.isPointLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*T),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const P=D.shadow,R=n.get(D);R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,R.shadowCameraNear=P.camera.near,R.shadowCameraFar=P.camera.far,i.pointShadow[m]=R,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=D.shadow.matrix,A++}i.point[m]=Q,m++}else if(D.isHemisphereLight){const Q=e.get(D);Q.skyColor.copy(D.color).multiplyScalar(H*T),Q.groundColor.copy(D.groundColor).multiplyScalar(H*T),i.hemi[v]=Q,v++}}M>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=d,i.ambient[2]=g;const k=i.hash;(k.directionalLength!==_||k.pointLength!==m||k.spotLength!==f||k.rectAreaLength!==M||k.hemiLength!==v||k.numDirectionalShadows!==S||k.numPointShadows!==A||k.numSpotShadows!==C||k.numSpotMaps!==E||k.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=M,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=C+E-U,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=x,k.directionalLength=_,k.pointLength=m,k.spotLength=f,k.rectAreaLength=M,k.hemiLength=v,k.numDirectionalShadows=S,k.numPointShadows=A,k.numSpotShadows=C,k.numSpotMaps=E,k.numLightProbes=x,i.version=yg++)}function c(h,u){let p=0,d=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){const S=h[M];if(S.isDirectionalLight){const A=i.directional[p];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),p++}else if(S.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),d++}else if(S.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function vc(r,t){const e=new Eg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Tg(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new vc(r,t),e.set(s,[l])):o>=a.length?(l=new vc(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class bg extends yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wg extends yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cg(r,t,e){let n=new To;const i=new Ft,s=new Ft,o=new ae,a=new bg({depthPacking:yd}),l=new wg,c={},h=e.maxTextureSize,u={[oi]:We,[We]:oi,[Gn]:Gn},p=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Ag,fragmentShader:Rg}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new Sn;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let f=this.type;this.render=function(C,E,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const x=r.getRenderTarget(),T=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),G=r.state;G.setBlending(ni),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const K=f!==On&&this.type===On,D=f===On&&this.type!==On;for(let B=0,H=C.length;B<H;B++){const Z=C[B],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const Q=$.getFrameExtents();if(i.multiply(Q),s.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,$.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,$.mapSize.y=s.y)),$.map===null||K===!0||D===!0){const R=this.type!==On?{minFilter:Ge,magFilter:Ge}:{};$.map!==null&&$.map.dispose(),$.map=new Di(i.x,i.y,R),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();const P=$.getViewportCount();for(let R=0;R<P;R++){const X=$.getViewport(R);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),G.viewport(o),$.updateMatrices(Z,R),n=$.getFrustum(),S(E,U,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===On&&M($,U),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(x,T,k)};function M(C,E){const U=t.update(_);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Di(i.x,i.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(E,null,U,p,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(E,null,U,d,_,null)}function v(C,E,U,x){let T=null;const k=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)T=k;else if(T=U.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const G=T.uuid,K=E.uuid;let D=c[G];D===void 0&&(D={},c[G]=D);let B=D[K];B===void 0&&(B=T.clone(),D[K]=B,E.addEventListener("dispose",A)),T=B}if(T.visible=E.visible,T.wireframe=E.wireframe,x===On?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const G=r.properties.get(T);G.light=U}return T}function S(C,E,U,x,T){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===On)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const K=t.update(C),D=C.material;if(Array.isArray(D)){const B=K.groups;for(let H=0,Z=B.length;H<Z;H++){const $=B[H],Q=D[$.materialIndex];if(Q&&Q.visible){const P=v(C,Q,x,T);C.onBeforeShadow(r,C,E,U,K,P,$),r.renderBufferDirect(U,null,K,P,C,$),C.onAfterShadow(r,C,E,U,K,P,$)}}}else if(D.visible){const B=v(C,D,x,T);C.onBeforeShadow(r,C,E,U,K,B,null),r.renderBufferDirect(U,null,K,B,C,null),C.onAfterShadow(r,C,E,U,K,B,null)}}const G=C.children;for(let K=0,D=G.length;K<D;K++)S(G[K],E,U,x,T)}function A(C){C.target.removeEventListener("dispose",A);for(const U in c){const x=c[U],T=C.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}function Pg(r,t,e){const n=e.isWebGL2;function i(){let I=!1;const ct=new ae;let pt=null;const It=new ae(0,0,0,0);return{setMask:function(Lt){pt!==Lt&&!I&&(r.colorMask(Lt,Lt,Lt,Lt),pt=Lt)},setLocked:function(Lt){I=Lt},setClear:function(Lt,Yt,jt,de,me){me===!0&&(Lt*=de,Yt*=de,jt*=de),ct.set(Lt,Yt,jt,de),It.equals(ct)===!1&&(r.clearColor(Lt,Yt,jt,de),It.copy(ct))},reset:function(){I=!1,pt=null,It.set(-1,0,0,0)}}}function s(){let I=!1,ct=null,pt=null,It=null;return{setTest:function(Lt){Lt?gt(r.DEPTH_TEST):mt(r.DEPTH_TEST)},setMask:function(Lt){ct!==Lt&&!I&&(r.depthMask(Lt),ct=Lt)},setFunc:function(Lt){if(pt!==Lt){switch(Lt){case $u:r.depthFunc(r.NEVER);break;case Ju:r.depthFunc(r.ALWAYS);break;case Qu:r.depthFunc(r.LESS);break;case Us:r.depthFunc(r.LEQUAL);break;case td:r.depthFunc(r.EQUAL);break;case ed:r.depthFunc(r.GEQUAL);break;case nd:r.depthFunc(r.GREATER);break;case id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=Lt}},setLocked:function(Lt){I=Lt},setClear:function(Lt){It!==Lt&&(r.clearDepth(Lt),It=Lt)},reset:function(){I=!1,ct=null,pt=null,It=null}}}function o(){let I=!1,ct=null,pt=null,It=null,Lt=null,Yt=null,jt=null,de=null,me=null;return{setTest:function(Qt){I||(Qt?gt(r.STENCIL_TEST):mt(r.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!I&&(r.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,xe,En){(pt!==Qt||It!==xe||Lt!==En)&&(r.stencilFunc(Qt,xe,En),pt=Qt,It=xe,Lt=En)},setOp:function(Qt,xe,En){(Yt!==Qt||jt!==xe||de!==En)&&(r.stencilOp(Qt,xe,En),Yt=Qt,jt=xe,de=En)},setLocked:function(Qt){I=Qt},setClear:function(Qt){me!==Qt&&(r.clearStencil(Qt),me=Qt)},reset:function(){I=!1,ct=null,pt=null,It=null,Lt=null,Yt=null,jt=null,de=null,me=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let p={},d={},g=new WeakMap,_=[],m=null,f=!1,M=null,v=null,S=null,A=null,C=null,E=null,U=null,x=new yt(0,0,0),T=0,k=!1,G=null,K=null,D=null,B=null,H=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const P=r.getParameter(r.VERSION);P.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(P)[1]),$=Q>=1):P.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),$=Q>=2);let R=null,X={};const O=r.getParameter(r.SCISSOR_BOX),W=r.getParameter(r.VIEWPORT),J=new ae().fromArray(O),at=new ae().fromArray(W);function tt(I,ct,pt,It){const Lt=new Uint8Array(4),Yt=r.createTexture();r.bindTexture(I,Yt),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let jt=0;jt<pt;jt++)n&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(ct,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,Lt):r.texImage2D(ct+jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Lt);return Yt}const ht={};ht[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),ht[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ht[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ht[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),gt(r.DEPTH_TEST),l.setFunc(Us),Dt(!1),w(Qo),gt(r.CULL_FACE),_t(ni);function gt(I){p[I]!==!0&&(r.enable(I),p[I]=!0)}function mt(I){p[I]!==!1&&(r.disable(I),p[I]=!1)}function Et(I,ct){return d[I]!==ct?(r.bindFramebuffer(I,ct),d[I]=ct,n&&(I===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ct),I===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ct)),!0):!1}function F(I,ct){let pt=_,It=!1;if(I)if(pt=g.get(ct),pt===void 0&&(pt=[],g.set(ct,pt)),I.isWebGLMultipleRenderTargets){const Lt=I.texture;if(pt.length!==Lt.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let Yt=0,jt=Lt.length;Yt<jt;Yt++)pt[Yt]=r.COLOR_ATTACHMENT0+Yt;pt.length=Lt.length,It=!0}}else pt[0]!==r.COLOR_ATTACHMENT0&&(pt[0]=r.COLOR_ATTACHMENT0,It=!0);else pt[0]!==r.BACK&&(pt[0]=r.BACK,It=!0);It&&(e.isWebGL2?r.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function Zt(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const lt={[Si]:r.FUNC_ADD,[Ou]:r.FUNC_SUBTRACT,[Fu]:r.FUNC_REVERSE_SUBTRACT};if(n)lt[il]=r.MIN,lt[rl]=r.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(lt[il]=I.MIN_EXT,lt[rl]=I.MAX_EXT)}const Tt={[Bu]:r.ZERO,[zu]:r.ONE,[Gu]:r.SRC_COLOR,[$a]:r.SRC_ALPHA,[qu]:r.SRC_ALPHA_SATURATE,[Wu]:r.DST_COLOR,[Hu]:r.DST_ALPHA,[ku]:r.ONE_MINUS_SRC_COLOR,[Ja]:r.ONE_MINUS_SRC_ALPHA,[Xu]:r.ONE_MINUS_DST_COLOR,[Vu]:r.ONE_MINUS_DST_ALPHA,[Yu]:r.CONSTANT_COLOR,[ju]:r.ONE_MINUS_CONSTANT_COLOR,[Zu]:r.CONSTANT_ALPHA,[Ku]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(I,ct,pt,It,Lt,Yt,jt,de,me,Qt){if(I===ni){f===!0&&(mt(r.BLEND),f=!1);return}if(f===!1&&(gt(r.BLEND),f=!0),I!==Nu){if(I!==M||Qt!==k){if((v!==Si||C!==Si)&&(r.blendEquation(r.FUNC_ADD),v=Si,C=Si),Qt)switch(I){case or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tl:r.blendFunc(r.ONE,r.ONE);break;case el:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case el:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,A=null,E=null,U=null,x.set(0,0,0),T=0,M=I,k=Qt}return}Lt=Lt||ct,Yt=Yt||pt,jt=jt||It,(ct!==v||Lt!==C)&&(r.blendEquationSeparate(lt[ct],lt[Lt]),v=ct,C=Lt),(pt!==S||It!==A||Yt!==E||jt!==U)&&(r.blendFuncSeparate(Tt[pt],Tt[It],Tt[Yt],Tt[jt]),S=pt,A=It,E=Yt,U=jt),(de.equals(x)===!1||me!==T)&&(r.blendColor(de.r,de.g,de.b,me),x.copy(de),T=me),M=I,k=!1}function qt(I,ct){I.side===Gn?mt(r.CULL_FACE):gt(r.CULL_FACE);let pt=I.side===We;ct&&(pt=!pt),Dt(pt),I.blending===or&&I.transparent===!1?_t(ni):_t(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const It=I.stencilWrite;c.setTest(It),It&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?gt(r.SAMPLE_ALPHA_TO_COVERAGE):mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(I){G!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),G=I)}function w(I){I!==Iu?(gt(r.CULL_FACE),I!==K&&(I===Qo?r.cullFace(r.BACK):I===Uu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):mt(r.CULL_FACE),K=I}function y(I){I!==D&&($&&r.lineWidth(I),D=I)}function V(I,ct,pt){I?(gt(r.POLYGON_OFFSET_FILL),(B!==ct||H!==pt)&&(r.polygonOffset(ct,pt),B=ct,H=pt)):mt(r.POLYGON_OFFSET_FILL)}function st(I){I?gt(r.SCISSOR_TEST):mt(r.SCISSOR_TEST)}function nt(I){I===void 0&&(I=r.TEXTURE0+Z-1),R!==I&&(r.activeTexture(I),R=I)}function it(I,ct,pt){pt===void 0&&(R===null?pt=r.TEXTURE0+Z-1:pt=R);let It=X[pt];It===void 0&&(It={type:void 0,texture:void 0},X[pt]=It),(It.type!==I||It.texture!==ct)&&(R!==pt&&(r.activeTexture(pt),R=pt),r.bindTexture(I,ct||ht[I]),It.type=I,It.texture=ct)}function bt(){const I=X[R];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ft(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Kt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(I){J.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),J.copy(I))}function ot(I){at.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),at.copy(I))}function At(I,ct){let pt=u.get(ct);pt===void 0&&(pt=new WeakMap,u.set(ct,pt));let It=pt.get(I);It===void 0&&(It=r.getUniformBlockIndex(ct,I.name),pt.set(I,It))}function St(I,ct){const It=u.get(ct).get(I);h.get(ct)!==It&&(r.uniformBlockBinding(ct,It,I.__bindingPointIndex),h.set(ct,It))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},R=null,X={},d={},g=new WeakMap,_=[],m=null,f=!1,M=null,v=null,S=null,A=null,C=null,E=null,U=null,x=new yt(0,0,0),T=0,k=!1,G=null,K=null,D=null,B=null,H=null,J.set(0,0,r.canvas.width,r.canvas.height),at.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:gt,disable:mt,bindFramebuffer:Et,drawBuffers:F,useProgram:Zt,setBlending:_t,setMaterial:qt,setFlipSided:Dt,setCullFace:w,setLineWidth:y,setPolygonOffset:V,setScissorTest:st,activeTexture:nt,bindTexture:it,unbindTexture:bt,compressedTexImage2D:ft,compressedTexImage3D:Mt,texImage2D:Ct,texImage3D:vt,updateUBOMapping:At,uniformBlockBinding:St,texStorage2D:Gt,texStorage3D:Nt,texSubImage2D:Pt,texSubImage3D:Bt,compressedTexSubImage2D:et,compressedTexSubImage3D:Kt,scissor:L,viewport:ot,reset:rt}}function Lg(r,t,e,n,i,s,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return d?new OffscreenCanvas(w,y):Gs("canvas")}function _(w,y,V,st){let nt=1;if((w.width>st||w.height>st)&&(nt=st/Math.max(w.width,w.height)),nt<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const it=y?io:Math.floor,bt=it(nt*w.width),ft=it(nt*w.height);u===void 0&&(u=g(bt,ft));const Mt=V?g(bt,ft):u;return Mt.width=bt,Mt.height=ft,Mt.getContext("2d").drawImage(w,0,0,bt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+bt+"x"+ft+")."),Mt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Ul(w.width)&&Ul(w.height)}function f(w){return a?!1:w.wrapS!==Mn||w.wrapT!==Mn||w.minFilter!==Ge&&w.minFilter!==dn}function M(w,y){return w.generateMipmaps&&y&&w.minFilter!==Ge&&w.minFilter!==dn}function v(w){r.generateMipmap(w)}function S(w,y,V,st,nt=!1){if(a===!1)return y;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let it=y;if(y===r.RED&&(V===r.FLOAT&&(it=r.R32F),V===r.HALF_FLOAT&&(it=r.R16F),V===r.UNSIGNED_BYTE&&(it=r.R8)),y===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(it=r.R8UI),V===r.UNSIGNED_SHORT&&(it=r.R16UI),V===r.UNSIGNED_INT&&(it=r.R32UI),V===r.BYTE&&(it=r.R8I),V===r.SHORT&&(it=r.R16I),V===r.INT&&(it=r.R32I)),y===r.RG&&(V===r.FLOAT&&(it=r.RG32F),V===r.HALF_FLOAT&&(it=r.RG16F),V===r.UNSIGNED_BYTE&&(it=r.RG8)),y===r.RGBA){const bt=nt?Ns:ee.getTransfer(st);V===r.FLOAT&&(it=r.RGBA32F),V===r.HALF_FLOAT&&(it=r.RGBA16F),V===r.UNSIGNED_BYTE&&(it=bt===re?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(it=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(it=r.RGB5_A1)}return(it===r.R16F||it===r.R32F||it===r.RG16F||it===r.RG32F||it===r.RGBA16F||it===r.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function A(w,y,V){return M(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==Ge&&w.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function C(w){return w===Ge||w===sl||w===la?r.NEAREST:r.LINEAR}function E(w){const y=w.target;y.removeEventListener("dispose",E),x(y),y.isVideoTexture&&h.delete(y)}function U(w){const y=w.target;y.removeEventListener("dispose",U),k(y)}function x(w){const y=n.get(w);if(y.__webglInit===void 0)return;const V=w.source,st=p.get(V);if(st){const nt=st[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&T(w),Object.keys(st).length===0&&p.delete(V)}n.remove(w)}function T(w){const y=n.get(w);r.deleteTexture(y.__webglTexture);const V=w.source,st=p.get(V);delete st[y.__cacheKey],o.memory.textures--}function k(w){const y=w.texture,V=n.get(w),st=n.get(y);if(st.__webglTexture!==void 0&&(r.deleteTexture(st.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(V.__webglFramebuffer[nt]))for(let it=0;it<V.__webglFramebuffer[nt].length;it++)r.deleteFramebuffer(V.__webglFramebuffer[nt][it]);else r.deleteFramebuffer(V.__webglFramebuffer[nt]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[nt])}else{if(Array.isArray(V.__webglFramebuffer))for(let nt=0;nt<V.__webglFramebuffer.length;nt++)r.deleteFramebuffer(V.__webglFramebuffer[nt]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let nt=0;nt<V.__webglColorRenderbuffer.length;nt++)V.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[nt]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let nt=0,it=y.length;nt<it;nt++){const bt=n.get(y[nt]);bt.__webglTexture&&(r.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(y[nt])}n.remove(y),n.remove(w)}let G=0;function K(){G=0}function D(){const w=G;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),G+=1,w}function B(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function H(w,y){const V=n.get(w);if(w.isVideoTexture&&qt(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const st=w.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(V,w,y);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+y)}function Z(w,y){const V=n.get(w);if(w.version>0&&V.__version!==w.version){J(V,w,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+y)}function $(w,y){const V=n.get(w);if(w.version>0&&V.__version!==w.version){J(V,w,y);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+y)}function Q(w,y){const V=n.get(w);if(w.version>0&&V.__version!==w.version){at(V,w,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+y)}const P={[Bn]:r.REPEAT,[Mn]:r.CLAMP_TO_EDGE,[eo]:r.MIRRORED_REPEAT},R={[Ge]:r.NEAREST,[sl]:r.NEAREST_MIPMAP_NEAREST,[la]:r.NEAREST_MIPMAP_LINEAR,[dn]:r.LINEAR,[ud]:r.LINEAR_MIPMAP_NEAREST,[zr]:r.LINEAR_MIPMAP_LINEAR},X={[Ed]:r.NEVER,[Cd]:r.ALWAYS,[Td]:r.LESS,[hh]:r.LEQUAL,[bd]:r.EQUAL,[Rd]:r.GEQUAL,[wd]:r.GREATER,[Ad]:r.NOTEQUAL};function O(w,y,V){if(V?(r.texParameteri(w,r.TEXTURE_WRAP_S,P[y.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,P[y.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,P[y.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,R[y.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,R[y.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==Mn||y.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,C(y.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,C(y.minFilter)),y.minFilter!==Ge&&y.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,X[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Ge||y.minFilter!==la&&y.minFilter!==zr||y.type===Jn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===Gr&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(w,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function W(w,y){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",E));const st=y.source;let nt=p.get(st);nt===void 0&&(nt={},p.set(st,nt));const it=B(y);if(it!==w.__cacheKey){nt[it]===void 0&&(nt[it]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[it].usedTimes++;const bt=nt[w.__cacheKey];bt!==void 0&&(nt[w.__cacheKey].usedTimes--,bt.usedTimes===0&&T(y)),w.__cacheKey=it,w.__webglTexture=nt[it].texture}return V}function J(w,y,V){let st=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(st=r.TEXTURE_3D);const nt=W(w,y),it=y.source;e.bindTexture(st,w.__webglTexture,r.TEXTURE0+V);const bt=n.get(it);if(it.version!==bt.__version||nt===!0){e.activeTexture(r.TEXTURE0+V);const ft=ee.getPrimaries(ee.workingColorSpace),Mt=y.colorSpace===fn?null:ee.getPrimaries(y.colorSpace),Pt=y.colorSpace===fn||ft===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Bt=f(y)&&m(y.image)===!1;let et=_(y.image,Bt,!1,i.maxTextureSize);et=Dt(y,et);const Kt=m(et)||a,Gt=s.convert(y.format,y.colorSpace);let Nt=s.convert(y.type),Ct=S(y.internalFormat,Gt,Nt,y.colorSpace,y.isVideoTexture);O(st,y,Kt);let vt;const L=y.mipmaps,ot=a&&y.isVideoTexture!==!0&&Ct!==oh,At=bt.__version===void 0||nt===!0,St=A(y,et,Kt);if(y.isDepthTexture)Ct=r.DEPTH_COMPONENT,a?y.type===Jn?Ct=r.DEPTH_COMPONENT32F:y.type===$n?Ct=r.DEPTH_COMPONENT24:y.type===bi?Ct=r.DEPTH24_STENCIL8:Ct=r.DEPTH_COMPONENT16:y.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===wi&&Ct===r.DEPTH_COMPONENT&&y.type!==yo&&y.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=$n,Nt=s.convert(y.type)),y.format===pr&&Ct===r.DEPTH_COMPONENT&&(Ct=r.DEPTH_STENCIL,y.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=bi,Nt=s.convert(y.type))),At&&(ot?e.texStorage2D(r.TEXTURE_2D,1,Ct,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,Ct,et.width,et.height,0,Gt,Nt,null));else if(y.isDataTexture)if(L.length>0&&Kt){ot&&At&&e.texStorage2D(r.TEXTURE_2D,St,Ct,L[0].width,L[0].height);for(let rt=0,I=L.length;rt<I;rt++)vt=L[rt],ot?e.texSubImage2D(r.TEXTURE_2D,rt,0,0,vt.width,vt.height,Gt,Nt,vt.data):e.texImage2D(r.TEXTURE_2D,rt,Ct,vt.width,vt.height,0,Gt,Nt,vt.data);y.generateMipmaps=!1}else ot?(At&&e.texStorage2D(r.TEXTURE_2D,St,Ct,et.width,et.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,et.width,et.height,Gt,Nt,et.data)):e.texImage2D(r.TEXTURE_2D,0,Ct,et.width,et.height,0,Gt,Nt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ot&&At&&e.texStorage3D(r.TEXTURE_2D_ARRAY,St,Ct,L[0].width,L[0].height,et.depth);for(let rt=0,I=L.length;rt<I;rt++)vt=L[rt],y.format!==yn?Gt!==null?ot?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,vt.width,vt.height,et.depth,Gt,vt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,Ct,vt.width,vt.height,et.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?e.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,vt.width,vt.height,et.depth,Gt,Nt,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,rt,Ct,vt.width,vt.height,et.depth,0,Gt,Nt,vt.data)}else{ot&&At&&e.texStorage2D(r.TEXTURE_2D,St,Ct,L[0].width,L[0].height);for(let rt=0,I=L.length;rt<I;rt++)vt=L[rt],y.format!==yn?Gt!==null?ot?e.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,vt.width,vt.height,Gt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,rt,Ct,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?e.texSubImage2D(r.TEXTURE_2D,rt,0,0,vt.width,vt.height,Gt,Nt,vt.data):e.texImage2D(r.TEXTURE_2D,rt,Ct,vt.width,vt.height,0,Gt,Nt,vt.data)}else if(y.isDataArrayTexture)ot?(At&&e.texStorage3D(r.TEXTURE_2D_ARRAY,St,Ct,et.width,et.height,et.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Gt,Nt,et.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ct,et.width,et.height,et.depth,0,Gt,Nt,et.data);else if(y.isData3DTexture)ot?(At&&e.texStorage3D(r.TEXTURE_3D,St,Ct,et.width,et.height,et.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Gt,Nt,et.data)):e.texImage3D(r.TEXTURE_3D,0,Ct,et.width,et.height,et.depth,0,Gt,Nt,et.data);else if(y.isFramebufferTexture){if(At)if(ot)e.texStorage2D(r.TEXTURE_2D,St,Ct,et.width,et.height);else{let rt=et.width,I=et.height;for(let ct=0;ct<St;ct++)e.texImage2D(r.TEXTURE_2D,ct,Ct,rt,I,0,Gt,Nt,null),rt>>=1,I>>=1}}else if(L.length>0&&Kt){ot&&At&&e.texStorage2D(r.TEXTURE_2D,St,Ct,L[0].width,L[0].height);for(let rt=0,I=L.length;rt<I;rt++)vt=L[rt],ot?e.texSubImage2D(r.TEXTURE_2D,rt,0,0,Gt,Nt,vt):e.texImage2D(r.TEXTURE_2D,rt,Ct,Gt,Nt,vt);y.generateMipmaps=!1}else ot?(At&&e.texStorage2D(r.TEXTURE_2D,St,Ct,et.width,et.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Gt,Nt,et)):e.texImage2D(r.TEXTURE_2D,0,Ct,Gt,Nt,et);M(y,Kt)&&v(st),bt.__version=it.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function at(w,y,V){if(y.image.length!==6)return;const st=W(w,y),nt=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+V);const it=n.get(nt);if(nt.version!==it.__version||st===!0){e.activeTexture(r.TEXTURE0+V);const bt=ee.getPrimaries(ee.workingColorSpace),ft=y.colorSpace===fn?null:ee.getPrimaries(y.colorSpace),Mt=y.colorSpace===fn||bt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Pt=y.isCompressedTexture||y.image[0].isCompressedTexture,Bt=y.image[0]&&y.image[0].isDataTexture,et=[];for(let rt=0;rt<6;rt++)!Pt&&!Bt?et[rt]=_(y.image[rt],!1,!0,i.maxCubemapSize):et[rt]=Bt?y.image[rt].image:y.image[rt],et[rt]=Dt(y,et[rt]);const Kt=et[0],Gt=m(Kt)||a,Nt=s.convert(y.format,y.colorSpace),Ct=s.convert(y.type),vt=S(y.internalFormat,Nt,Ct,y.colorSpace),L=a&&y.isVideoTexture!==!0,ot=it.__version===void 0||st===!0;let At=A(y,Kt,Gt);O(r.TEXTURE_CUBE_MAP,y,Gt);let St;if(Pt){L&&ot&&e.texStorage2D(r.TEXTURE_CUBE_MAP,At,vt,Kt.width,Kt.height);for(let rt=0;rt<6;rt++){St=et[rt].mipmaps;for(let I=0;I<St.length;I++){const ct=St[I];y.format!==yn?Nt!==null?L?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,0,0,ct.width,ct.height,Nt,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,vt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,0,0,ct.width,ct.height,Nt,Ct,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I,vt,ct.width,ct.height,0,Nt,Ct,ct.data)}}}else{St=y.mipmaps,L&&ot&&(St.length>0&&At++,e.texStorage2D(r.TEXTURE_CUBE_MAP,At,vt,et[0].width,et[0].height));for(let rt=0;rt<6;rt++)if(Bt){L?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,et[rt].width,et[rt].height,Nt,Ct,et[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,vt,et[rt].width,et[rt].height,0,Nt,Ct,et[rt].data);for(let I=0;I<St.length;I++){const pt=St[I].image[rt].image;L?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,0,0,pt.width,pt.height,Nt,Ct,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,vt,pt.width,pt.height,0,Nt,Ct,pt.data)}}else{L?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Nt,Ct,et[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,vt,Nt,Ct,et[rt]);for(let I=0;I<St.length;I++){const ct=St[I];L?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,0,0,Nt,Ct,ct.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,I+1,vt,Nt,Ct,ct.image[rt])}}}M(y,Gt)&&v(r.TEXTURE_CUBE_MAP),it.__version=nt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function tt(w,y,V,st,nt,it){const bt=s.convert(V.format,V.colorSpace),ft=s.convert(V.type),Mt=S(V.internalFormat,bt,ft,V.colorSpace);if(!n.get(y).__hasExternalTextures){const Bt=Math.max(1,y.width>>it),et=Math.max(1,y.height>>it);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,it,Mt,Bt,et,y.depth,0,bt,ft,null):e.texImage2D(nt,it,Mt,Bt,et,0,bt,ft,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),_t(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,nt,n.get(V).__webglTexture,0,Tt(y)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,nt,n.get(V).__webglTexture,it),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(w,y,V){if(r.bindRenderbuffer(r.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let st=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(V||_t(y)){const nt=y.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Jn?st=r.DEPTH_COMPONENT32F:nt.type===$n&&(st=r.DEPTH_COMPONENT24));const it=Tt(y);_t(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,st,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,it,st,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,st,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const st=Tt(y);V&&_t(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,st,r.DEPTH24_STENCIL8,y.width,y.height):_t(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,st,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const st=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let nt=0;nt<st.length;nt++){const it=st[nt],bt=s.convert(it.format,it.colorSpace),ft=s.convert(it.type),Mt=S(it.internalFormat,bt,ft,it.colorSpace),Pt=Tt(y);V&&_t(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,Mt,y.width,y.height):_t(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt,Mt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Mt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function gt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H(y.depthTexture,0);const st=n.get(y.depthTexture).__webglTexture,nt=Tt(y);if(y.depthTexture.format===wi)_t(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0);else if(y.depthTexture.format===pr)_t(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function mt(w){const y=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");gt(y.__webglFramebuffer,w)}else if(V){y.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[st]),y.__webglDepthbuffer[st]=r.createRenderbuffer(),ht(y.__webglDepthbuffer[st],w,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),ht(y.__webglDepthbuffer,w,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(w,y,V){const st=n.get(w);y!==void 0&&tt(st.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&mt(w)}function F(w){const y=w.texture,V=n.get(w),st=n.get(y);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=y.version,o.memory.textures++);const nt=w.isWebGLCubeRenderTarget===!0,it=w.isWebGLMultipleRenderTargets===!0,bt=m(w)||a;if(nt){V.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(a&&y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ft]=[];for(let Mt=0;Mt<y.mipmaps.length;Mt++)V.__webglFramebuffer[ft][Mt]=r.createFramebuffer()}else V.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ft=0;ft<y.mipmaps.length;ft++)V.__webglFramebuffer[ft]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(it)if(i.drawBuffers){const ft=w.texture;for(let Mt=0,Pt=ft.length;Mt<Pt;Mt++){const Bt=n.get(ft[Mt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&_t(w)===!1){const ft=it?y:[y];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ft.length;Mt++){const Pt=ft[Mt];V.__webglColorRenderbuffer[Mt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[Mt]);const Bt=s.convert(Pt.format,Pt.colorSpace),et=s.convert(Pt.type),Kt=S(Pt.internalFormat,Bt,et,Pt.colorSpace,w.isXRRenderTarget===!0),Gt=Tt(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,Kt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,V.__webglColorRenderbuffer[Mt])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),O(r.TEXTURE_CUBE_MAP,y,bt);for(let ft=0;ft<6;ft++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)tt(V.__webglFramebuffer[ft][Mt],w,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Mt);else tt(V.__webglFramebuffer[ft],w,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);M(y,bt)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){const ft=w.texture;for(let Mt=0,Pt=ft.length;Mt<Pt;Mt++){const Bt=ft[Mt],et=n.get(Bt);e.bindTexture(r.TEXTURE_2D,et.__webglTexture),O(r.TEXTURE_2D,Bt,bt),tt(V.__webglFramebuffer,w,Bt,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,0),M(Bt,bt)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let ft=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ft=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,st.__webglTexture),O(ft,y,bt),a&&y.mipmaps&&y.mipmaps.length>0)for(let Mt=0;Mt<y.mipmaps.length;Mt++)tt(V.__webglFramebuffer[Mt],w,y,r.COLOR_ATTACHMENT0,ft,Mt);else tt(V.__webglFramebuffer,w,y,r.COLOR_ATTACHMENT0,ft,0);M(y,bt)&&v(ft),e.unbindTexture()}w.depthBuffer&&mt(w)}function Zt(w){const y=m(w)||a,V=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let st=0,nt=V.length;st<nt;st++){const it=V[st];if(M(it,y)){const bt=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ft=n.get(it).__webglTexture;e.bindTexture(bt,ft),v(bt),e.unbindTexture()}}}function lt(w){if(a&&w.samples>0&&_t(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],V=w.width,st=w.height;let nt=r.COLOR_BUFFER_BIT;const it=[],bt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=n.get(w),Mt=w.isWebGLMultipleRenderTargets===!0;if(Mt)for(let Pt=0;Pt<y.length;Pt++)e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Pt=0;Pt<y.length;Pt++){it.push(r.COLOR_ATTACHMENT0+Pt),w.depthBuffer&&it.push(bt);const Bt=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(Bt===!1&&(w.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),Mt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ft.__webglColorRenderbuffer[Pt]),Bt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[bt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[bt])),Mt){const et=n.get(y[Pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,V,st,0,0,V,st,nt,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Mt)for(let Pt=0;Pt<y.length;Pt++){e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,ft.__webglColorRenderbuffer[Pt]);const Bt=n.get(y[Pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,Bt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}}function Tt(w){return Math.min(i.maxSamples,w.samples)}function _t(w){const y=n.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function qt(w){const y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Dt(w,y){const V=w.colorSpace,st=w.format,nt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===no||V!==Hn&&V!==fn&&(ee.getTransfer(V)===re?a===!1?t.has("EXT_sRGB")===!0&&st===yn?(w.format=no,w.minFilter=dn,w.generateMipmaps=!1):y=dh.sRGBToLinear(y):(st!==yn||nt!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}this.allocateTextureUnit=D,this.resetTextureUnits=K,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=Et,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=_t}function Dg(r,t,e){const n=e.isWebGL2;function i(s,o=fn){let a;const l=ee.getTransfer(o);if(s===ri)return r.UNSIGNED_BYTE;if(s===nh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ih)return r.UNSIGNED_SHORT_5_5_5_1;if(s===dd)return r.BYTE;if(s===fd)return r.SHORT;if(s===yo)return r.UNSIGNED_SHORT;if(s===eh)return r.INT;if(s===$n)return r.UNSIGNED_INT;if(s===Jn)return r.FLOAT;if(s===Gr)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===pd)return r.ALPHA;if(s===yn)return r.RGBA;if(s===md)return r.LUMINANCE;if(s===_d)return r.LUMINANCE_ALPHA;if(s===wi)return r.DEPTH_COMPONENT;if(s===pr)return r.DEPTH_STENCIL;if(s===no)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===gd)return r.RED;if(s===rh)return r.RED_INTEGER;if(s===vd)return r.RG;if(s===sh)return r.RG_INTEGER;if(s===ah)return r.RGBA_INTEGER;if(s===ca||s===ha||s===ua||s===da)if(l===re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ca)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ca)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ha)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ua)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===da)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===al||s===ol||s===ll||s===cl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===al)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ol)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ll)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===cl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===oh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hl||s===ul)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===hl)return l===re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ul)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===dl||s===fl||s===pl||s===ml||s===_l||s===gl||s===vl||s===xl||s===Ml||s===yl||s===Sl||s===El||s===Tl||s===bl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===dl)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fl)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pl)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ml)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_l)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gl)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vl)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xl)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ml)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yl)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sl)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===El)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Tl)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bl)return l===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fa||s===wl||s===Al)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===fa)return l===re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Al)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xd||s===Rl||s===Cl||s===Pl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===fa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Rl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bi?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Ig extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $t extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ug={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ng extends Ni{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const M=[],v=[],S=new Ft;let A=null;const C=new He;C.layers.enable(1),C.viewport=new ae;const E=new He;E.layers.enable(2),E.viewport=new ae;const U=[C,E],x=new Ig;x.layers.enable(1),x.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=M[O];return W===void 0&&(W=new Fa,M[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=M[O];return W===void 0&&(W=new Fa,M[O]=W),W.getGripSpace()},this.getHand=function(O){let W=M[O];return W===void 0&&(W=new Fa,M[O]=W),W.getHandSpace()};function G(O){const W=v.indexOf(O.inputSource);if(W===-1)return;const J=M[W];J!==void 0&&(J.update(O.inputSource,O.frame,c||o),J.dispatchEvent({type:O.type,data:O.inputSource}))}function K(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",D);for(let O=0;O<M.length;O++){const W=v[O];W!==null&&(v[O]=null,M[O].disconnect(W))}T=null,k=null,t.setRenderTarget(m),d=null,p=null,u=null,i=null,f=null,X.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",K),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,W),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),f=new Di(d.framebufferWidth,d.framebufferHeight,{format:yn,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let W=null,J=null,at=null;_.depth&&(at=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=_.stencil?pr:wi,J=_.stencil?bi:$n);const tt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};u=new XRWebGLBinding(i,e),p=u.createProjectionLayer(tt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),f=new Di(p.textureWidth,p.textureHeight,{format:yn,type:ri,depthTexture:new Th(p.textureWidth,p.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const ht=t.properties.get(f);ht.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(O){for(let W=0;W<O.removed.length;W++){const J=O.removed[W],at=v.indexOf(J);at>=0&&(v[at]=null,M[at].disconnect(J))}for(let W=0;W<O.added.length;W++){const J=O.added[W];let at=v.indexOf(J);if(at===-1){for(let ht=0;ht<M.length;ht++)if(ht>=v.length){v.push(J),at=ht;break}else if(v[ht]===null){v[ht]=J,at=ht;break}if(at===-1)break}const tt=M[at];tt&&tt.connect(J)}}const B=new N,H=new N;function Z(O,W,J){B.setFromMatrixPosition(W.matrixWorld),H.setFromMatrixPosition(J.matrixWorld);const at=B.distanceTo(H),tt=W.projectionMatrix.elements,ht=J.projectionMatrix.elements,gt=tt[14]/(tt[10]-1),mt=tt[14]/(tt[10]+1),Et=(tt[9]+1)/tt[5],F=(tt[9]-1)/tt[5],Zt=(tt[8]-1)/tt[0],lt=(ht[8]+1)/ht[0],Tt=gt*Zt,_t=gt*lt,qt=at/(-Zt+lt),Dt=qt*-Zt;W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Dt),O.translateZ(qt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const w=gt+qt,y=mt+qt,V=Tt-Dt,st=_t+(at-Dt),nt=Et*mt/y*w,it=F*mt/y*w;O.projectionMatrix.makePerspective(V,st,nt,it,w,y),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function $(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;x.near=E.near=C.near=O.near,x.far=E.far=C.far=O.far,(T!==x.near||k!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,k=x.far);const W=O.parent,J=x.cameras;$(x,W);for(let at=0;at<J.length;at++)$(J[at],W);J.length===2?Z(x,C,E):x.projectionMatrix.copy(C.projectionMatrix),Q(O,x,W)};function Q(O,W,J){J===null?O.matrix.copy(W.matrixWorld):(O.matrix.copy(J.matrixWorld),O.matrix.invert(),O.matrix.multiply(W.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(W.projectionMatrix),O.projectionMatrixInverse.copy(W.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=zs*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(O){l=O,p!==null&&(p.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let P=null;function R(O,W){if(h=W.getViewerPose(c||o),g=W,h!==null){const J=h.views;d!==null&&(t.setRenderTargetFramebuffer(f,d.framebuffer),t.setRenderTarget(f));let at=!1;J.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let tt=0;tt<J.length;tt++){const ht=J[tt];let gt=null;if(d!==null)gt=d.getViewport(ht);else{const Et=u.getViewSubImage(p,ht);gt=Et.viewport,tt===0&&(t.setRenderTargetTextures(f,Et.colorTexture,p.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(f))}let mt=U[tt];mt===void 0&&(mt=new He,mt.layers.enable(tt),mt.viewport=new ae,U[tt]=mt),mt.matrix.fromArray(ht.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ht.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(gt.x,gt.y,gt.width,gt.height),tt===0&&(x.matrix.copy(mt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(mt)}}for(let J=0;J<M.length;J++){const at=v[J],tt=M[J];at!==null&&tt!==void 0&&tt.update(at,W,c||o)}P&&P(O,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}const X=new Sh;X.setAnimationLoop(R),this.setAnimationLoop=function(O){P=O},this.dispose=function(){}}}function Og(r,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,xh(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,M,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===We&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===We&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===We&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fg(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=i[M.id];S===void 0&&(g(M),S=h(M),i[M.id]=S,M.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(M,A);const C=t.render.frame;s[M.id]!==C&&(p(M),s[M.id]=C)}function h(M){const v=u();M.__bindingPointIndex=v;const S=r.createBuffer(),A=M.__size,C=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const v=i[M.id],S=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let C=0,E=S.length;C<E;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let x=0,T=U.length;x<T;x++){const k=U[x];if(d(k,C,x,A)===!0){const G=k.__offset,K=Array.isArray(k.value)?k.value:[k.value];let D=0;for(let B=0;B<K.length;B++){const H=K[B],Z=_(H);typeof H=="number"||typeof H=="boolean"?(k.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,G+D,k.__data)):H.isMatrix3?(k.__data[0]=H.elements[0],k.__data[1]=H.elements[1],k.__data[2]=H.elements[2],k.__data[3]=0,k.__data[4]=H.elements[3],k.__data[5]=H.elements[4],k.__data[6]=H.elements[5],k.__data[7]=0,k.__data[8]=H.elements[6],k.__data[9]=H.elements[7],k.__data[10]=H.elements[8],k.__data[11]=0):(H.toArray(k.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,v,S,A){const C=M.value,E=v+"_"+S;if(A[E]===void 0)return typeof C=="number"||typeof C=="boolean"?A[E]=C:A[E]=C.clone(),!0;{const U=A[E];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return A[E]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(M){const v=M.uniforms;let S=0;const A=16;for(let E=0,U=v.length;E<U;E++){const x=Array.isArray(v[E])?v[E]:[v[E]];for(let T=0,k=x.length;T<k;T++){const G=x[T],K=Array.isArray(G.value)?G.value:[G.value];for(let D=0,B=K.length;D<B;D++){const H=K[D],Z=_(H),$=S%A;$!==0&&A-$<Z.boundary&&(S+=A-$),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=Z.storage}}}const C=S%A;return C>0&&(S+=A-C),M.__size=S,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function f(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}class Ph{constructor(t={}){const{canvas:e=Dd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;const v=this;let S=!1,A=0,C=0,E=null,U=-1,x=null;const T=new ae,k=new ae;let G=null;const K=new yt(0);let D=0,B=e.width,H=e.height,Z=1,$=null,Q=null;const P=new ae(0,0,B,H),R=new ae(0,0,B,H);let X=!1;const O=new To;let W=!1,J=!1,at=null;const tt=new ve,ht=new Ft,gt=new N,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Et(){return E===null?Z:1}let F=n;function Zt(b,z){for(let Y=0;Y<b.length;Y++){const j=b[Y],q=e.getContext(j,z);if(q!==null)return q}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mo}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ct,!1),F===null){const z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),F=Zt(z,b),F===null)throw Zt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let lt,Tt,_t,qt,Dt,w,y,V,st,nt,it,bt,ft,Mt,Pt,Bt,et,Kt,Gt,Nt,Ct,vt,L,ot;function At(){lt=new Ym(F),Tt=new km(F,lt,t),lt.init(Tt),vt=new Dg(F,lt,Tt),_t=new Pg(F,lt,Tt),qt=new Km(F),Dt=new _g,w=new Lg(F,lt,_t,Dt,Tt,vt,qt),y=new Vm(v),V=new qm(v),st=new rf(F,Tt),L=new zm(F,lt,st,Tt),nt=new jm(F,st,qt,L),it=new t_(F,nt,st,qt),Gt=new Qm(F,Tt,w),Bt=new Hm(Dt),bt=new mg(v,y,V,lt,Tt,L,Bt),ft=new Og(v,Dt),Mt=new vg,Pt=new Tg(lt,Tt),Kt=new Bm(v,y,V,_t,it,p,l),et=new Cg(v,it,Tt),ot=new Fg(F,qt,Tt,_t),Nt=new Gm(F,lt,qt,Tt),Ct=new Zm(F,lt,qt,Tt),qt.programs=bt.programs,v.capabilities=Tt,v.extensions=lt,v.properties=Dt,v.renderLists=Mt,v.shadowMap=et,v.state=_t,v.info=qt}At();const St=new Ng(v,F);this.xr=St,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=lt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=lt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(B,H,!1))},this.getSize=function(b){return b.set(B,H)},this.setSize=function(b,z,Y=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,H=z,e.width=Math.floor(b*Z),e.height=Math.floor(z*Z),Y===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(B*Z,H*Z).floor()},this.setDrawingBufferSize=function(b,z,Y){B=b,H=z,Z=Y,e.width=Math.floor(b*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,z,Y,j){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,z,Y,j),_t.viewport(T.copy(P).multiplyScalar(Z).floor())},this.getScissor=function(b){return b.copy(R)},this.setScissor=function(b,z,Y,j){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,z,Y,j),_t.scissor(k.copy(R).multiplyScalar(Z).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(b){_t.setScissorTest(X=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(b=!0,z=!0,Y=!0){let j=0;if(b){let q=!1;if(E!==null){const xt=E.texture.format;q=xt===ah||xt===sh||xt===rh}if(q){const xt=E.texture.type,Rt=xt===ri||xt===$n||xt===yo||xt===bi||xt===nh||xt===ih,Ut=Kt.getClearColor(),Ot=Kt.getClearAlpha(),Vt=Ut.r,zt=Ut.g,kt=Ut.b;Rt?(d[0]=Vt,d[1]=zt,d[2]=kt,d[3]=Ot,F.clearBufferuiv(F.COLOR,0,d)):(g[0]=Vt,g[1]=zt,g[2]=kt,g[3]=Ot,F.clearBufferiv(F.COLOR,0,g))}else j|=F.COLOR_BUFFER_BIT}z&&(j|=F.DEPTH_BUFFER_BIT),Y&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Mt.dispose(),Pt.dispose(),Dt.dispose(),y.dispose(),V.dispose(),it.dispose(),L.dispose(),ot.dispose(),bt.dispose(),St.dispose(),St.removeEventListener("sessionstart",me),St.removeEventListener("sessionend",Qt),at&&(at.dispose(),at=null),xe.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=qt.autoReset,z=et.enabled,Y=et.autoUpdate,j=et.needsUpdate,q=et.type;At(),qt.autoReset=b,et.enabled=z,et.autoUpdate=Y,et.needsUpdate=j,et.type=q}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pt(b){const z=b.target;z.removeEventListener("dispose",pt),It(z)}function It(b){Lt(b),Dt.remove(b)}function Lt(b){const z=Dt.get(b).programs;z!==void 0&&(z.forEach(function(Y){bt.releaseProgram(Y)}),b.isShaderMaterial&&bt.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Y,j,q,xt){z===null&&(z=mt);const Rt=q.isMesh&&q.matrixWorld.determinant()<0,Ut=Cu(b,z,Y,j,q);_t.setMaterial(j,Rt);let Ot=Y.index,Vt=1;if(j.wireframe===!0){if(Ot=nt.getWireframeAttribute(Y),Ot===void 0)return;Vt=2}const zt=Y.drawRange,kt=Y.attributes.position;let _e=zt.start*Vt,$e=(zt.start+zt.count)*Vt;xt!==null&&(_e=Math.max(_e,xt.start*Vt),$e=Math.min($e,(xt.start+xt.count)*Vt)),Ot!==null?(_e=Math.max(_e,0),$e=Math.min($e,Ot.count)):kt!=null&&(_e=Math.max(_e,0),$e=Math.min($e,kt.count));const we=$e-_e;if(we<0||we===1/0)return;L.setup(q,j,Ut,Y,Ot);let Pn,le=Nt;if(Ot!==null&&(Pn=st.get(Ot),le=Ct,le.setIndex(Pn)),q.isMesh)j.wireframe===!0?(_t.setLineWidth(j.wireframeLinewidth*Et()),le.setMode(F.LINES)):le.setMode(F.TRIANGLES);else if(q.isLine){let Wt=j.linewidth;Wt===void 0&&(Wt=1),_t.setLineWidth(Wt*Et()),q.isLineSegments?le.setMode(F.LINES):q.isLineLoop?le.setMode(F.LINE_LOOP):le.setMode(F.LINE_STRIP)}else q.isPoints?le.setMode(F.POINTS):q.isSprite&&le.setMode(F.TRIANGLES);if(q.isBatchedMesh)le.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)le.renderInstances(_e,we,q.count);else if(Y.isInstancedBufferGeometry){const Wt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ra=Math.min(Y.instanceCount,Wt);le.renderInstances(_e,we,ra)}else le.render(_e,we)};function Yt(b,z,Y){b.transparent===!0&&b.side===Gn&&b.forceSinglePass===!1?(b.side=We,b.needsUpdate=!0,es(b,z,Y),b.side=oi,b.needsUpdate=!0,es(b,z,Y),b.side=Gn):es(b,z,Y)}this.compile=function(b,z,Y=null){Y===null&&(Y=b),m=Pt.get(Y),m.init(),M.push(m),Y.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),b!==Y&&b.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(v._useLegacyLights);const j=new Set;return b.traverse(function(q){const xt=q.material;if(xt)if(Array.isArray(xt))for(let Rt=0;Rt<xt.length;Rt++){const Ut=xt[Rt];Yt(Ut,Y,q),j.add(Ut)}else Yt(xt,Y,q),j.add(xt)}),M.pop(),m=null,j},this.compileAsync=function(b,z,Y=null){const j=this.compile(b,z,Y);return new Promise(q=>{function xt(){if(j.forEach(function(Rt){Dt.get(Rt).currentProgram.isReady()&&j.delete(Rt)}),j.size===0){q(b);return}setTimeout(xt,10)}lt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let jt=null;function de(b){jt&&jt(b)}function me(){xe.stop()}function Qt(){xe.start()}const xe=new Sh;xe.setAnimationLoop(de),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(b){jt=b,St.setAnimationLoop(b),b===null?xe.stop():xe.start()},St.addEventListener("sessionstart",me),St.addEventListener("sessionend",Qt),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(z),z=St.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,z,E),m=Pt.get(b,M.length),m.init(),M.push(m),tt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),O.setFromProjectionMatrix(tt),J=this.localClippingEnabled,W=Bt.init(this.clippingPlanes,J),_=Mt.get(b,f.length),_.init(),f.push(_),En(b,z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort($,Q),this.info.render.frame++,W===!0&&Bt.beginShadows();const Y=m.state.shadowsArray;if(et.render(Y,b,z),W===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(_,b),m.setupLights(v._useLegacyLights),z.isArrayCamera){const j=z.cameras;for(let q=0,xt=j.length;q<xt;q++){const Rt=j[q];Yo(_,b,Rt,Rt.viewport)}}else Yo(_,b,z);E!==null&&(w.updateMultisampleRenderTarget(E),w.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(v,b,z),L.resetDefaultState(),U=-1,x=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function En(b,z,Y,j){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||O.intersectsSprite(b)){j&&gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(tt);const Rt=it.update(b),Ut=b.material;Ut.visible&&_.push(b,Rt,Ut,Y,gt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||O.intersectsObject(b))){const Rt=it.update(b),Ut=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),gt.copy(b.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),gt.copy(Rt.boundingSphere.center)),gt.applyMatrix4(b.matrixWorld).applyMatrix4(tt)),Array.isArray(Ut)){const Ot=Rt.groups;for(let Vt=0,zt=Ot.length;Vt<zt;Vt++){const kt=Ot[Vt],_e=Ut[kt.materialIndex];_e&&_e.visible&&_.push(b,Rt,_e,Y,gt.z,kt)}}else Ut.visible&&_.push(b,Rt,Ut,Y,gt.z,null)}}const xt=b.children;for(let Rt=0,Ut=xt.length;Rt<Ut;Rt++)En(xt[Rt],z,Y,j)}function Yo(b,z,Y,j){const q=b.opaque,xt=b.transmissive,Rt=b.transparent;m.setupLightsView(Y),W===!0&&Bt.setGlobalState(v.clippingPlanes,Y),xt.length>0&&Ru(q,xt,z,Y),j&&_t.viewport(T.copy(j)),q.length>0&&ts(q,z,Y),xt.length>0&&ts(xt,z,Y),Rt.length>0&&ts(Rt,z,Y),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ru(b,z,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const xt=Tt.isWebGL2;at===null&&(at=new Di(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")?Gr:ri,minFilter:zr,samples:xt?4:0})),v.getDrawingBufferSize(ht),xt?at.setSize(ht.x,ht.y):at.setSize(io(ht.x),io(ht.y));const Rt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(K),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ut=v.toneMapping;v.toneMapping=ii,ts(b,Y,j),w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at);let Ot=!1;for(let Vt=0,zt=z.length;Vt<zt;Vt++){const kt=z[Vt],_e=kt.object,$e=kt.geometry,we=kt.material,Pn=kt.group;if(we.side===Gn&&_e.layers.test(j.layers)){const le=we.side;we.side=We,we.needsUpdate=!0,jo(_e,Y,j,$e,we,Pn),we.side=le,we.needsUpdate=!0,Ot=!0}}Ot===!0&&(w.updateMultisampleRenderTarget(at),w.updateRenderTargetMipmap(at)),v.setRenderTarget(Rt),v.setClearColor(K,D),v.toneMapping=Ut}function ts(b,z,Y){const j=z.isScene===!0?z.overrideMaterial:null;for(let q=0,xt=b.length;q<xt;q++){const Rt=b[q],Ut=Rt.object,Ot=Rt.geometry,Vt=j===null?Rt.material:j,zt=Rt.group;Ut.layers.test(Y.layers)&&jo(Ut,z,Y,Ot,Vt,zt)}}function jo(b,z,Y,j,q,xt){b.onBeforeRender(v,z,Y,j,q,xt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(v,z,Y,j,b,xt),q.transparent===!0&&q.side===Gn&&q.forceSinglePass===!1?(q.side=We,q.needsUpdate=!0,v.renderBufferDirect(Y,z,j,q,b,xt),q.side=oi,q.needsUpdate=!0,v.renderBufferDirect(Y,z,j,q,b,xt),q.side=Gn):v.renderBufferDirect(Y,z,j,q,b,xt),b.onAfterRender(v,z,Y,j,q,xt)}function es(b,z,Y){z.isScene!==!0&&(z=mt);const j=Dt.get(b),q=m.state.lights,xt=m.state.shadowsArray,Rt=q.state.version,Ut=bt.getParameters(b,q.state,xt,z,Y),Ot=bt.getProgramCacheKey(Ut);let Vt=j.programs;j.environment=b.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(b.isMeshStandardMaterial?V:y).get(b.envMap||j.environment),Vt===void 0&&(b.addEventListener("dispose",pt),Vt=new Map,j.programs=Vt);let zt=Vt.get(Ot);if(zt!==void 0){if(j.currentProgram===zt&&j.lightsStateVersion===Rt)return Ko(b,Ut),zt}else Ut.uniforms=bt.getUniforms(b),b.onBuild(Y,Ut,v),b.onBeforeCompile(Ut,v),zt=bt.acquireProgram(Ut,Ot),Vt.set(Ot,zt),j.uniforms=Ut.uniforms;const kt=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=Bt.uniform),Ko(b,Ut),j.needsLights=Lu(b),j.lightsStateVersion=Rt,j.needsLights&&(kt.ambientLightColor.value=q.state.ambient,kt.lightProbe.value=q.state.probe,kt.directionalLights.value=q.state.directional,kt.directionalLightShadows.value=q.state.directionalShadow,kt.spotLights.value=q.state.spot,kt.spotLightShadows.value=q.state.spotShadow,kt.rectAreaLights.value=q.state.rectArea,kt.ltc_1.value=q.state.rectAreaLTC1,kt.ltc_2.value=q.state.rectAreaLTC2,kt.pointLights.value=q.state.point,kt.pointLightShadows.value=q.state.pointShadow,kt.hemisphereLights.value=q.state.hemi,kt.directionalShadowMap.value=q.state.directionalShadowMap,kt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,kt.spotShadowMap.value=q.state.spotShadowMap,kt.spotLightMatrix.value=q.state.spotLightMatrix,kt.spotLightMap.value=q.state.spotLightMap,kt.pointShadowMap.value=q.state.pointShadowMap,kt.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=zt,j.uniformsList=null,zt}function Zo(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Ps.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Ko(b,z){const Y=Dt.get(b);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Cu(b,z,Y,j,q){z.isScene!==!0&&(z=mt),w.resetTextureUnits();const xt=z.fog,Rt=j.isMeshStandardMaterial?z.environment:null,Ut=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Hn,Ot=(j.isMeshStandardMaterial?V:y).get(j.envMap||Rt),Vt=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,zt=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),kt=!!Y.morphAttributes.position,_e=!!Y.morphAttributes.normal,$e=!!Y.morphAttributes.color;let we=ii;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(we=v.toneMapping);const Pn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,le=Pn!==void 0?Pn.length:0,Wt=Dt.get(j),ra=m.state.lights;if(W===!0&&(J===!0||b!==x)){const cn=b===x&&j.id===U;Bt.setState(j,b,cn)}let fe=!1;j.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==ra.state.version||Wt.outputColorSpace!==Ut||q.isBatchedMesh&&Wt.batching===!1||!q.isBatchedMesh&&Wt.batching===!0||q.isInstancedMesh&&Wt.instancing===!1||!q.isInstancedMesh&&Wt.instancing===!0||q.isSkinnedMesh&&Wt.skinning===!1||!q.isSkinnedMesh&&Wt.skinning===!0||q.isInstancedMesh&&Wt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Wt.instancingColor===!1&&q.instanceColor!==null||Wt.envMap!==Ot||j.fog===!0&&Wt.fog!==xt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Bt.numPlanes||Wt.numIntersection!==Bt.numIntersection)||Wt.vertexAlphas!==Vt||Wt.vertexTangents!==zt||Wt.morphTargets!==kt||Wt.morphNormals!==_e||Wt.morphColors!==$e||Wt.toneMapping!==we||Tt.isWebGL2===!0&&Wt.morphTargetsCount!==le)&&(fe=!0):(fe=!0,Wt.__version=j.version);let di=Wt.currentProgram;fe===!0&&(di=es(j,z,q));let $o=!1,Er=!1,sa=!1;const De=di.getUniforms(),fi=Wt.uniforms;if(_t.useProgram(di.program)&&($o=!0,Er=!0,sa=!0),j.id!==U&&(U=j.id,Er=!0),$o||x!==b){De.setValue(F,"projectionMatrix",b.projectionMatrix),De.setValue(F,"viewMatrix",b.matrixWorldInverse);const cn=De.map.cameraPosition;cn!==void 0&&cn.setValue(F,gt.setFromMatrixPosition(b.matrixWorld)),Tt.logarithmicDepthBuffer&&De.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&De.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,Er=!0,sa=!0)}if(q.isSkinnedMesh){De.setOptional(F,q,"bindMatrix"),De.setOptional(F,q,"bindMatrixInverse");const cn=q.skeleton;cn&&(Tt.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),De.setValue(F,"boneTexture",cn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(De.setOptional(F,q,"batchingTexture"),De.setValue(F,"batchingTexture",q._matricesTexture,w));const aa=Y.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0&&Tt.isWebGL2===!0)&&Gt.update(q,Y,di),(Er||Wt.receiveShadow!==q.receiveShadow)&&(Wt.receiveShadow=q.receiveShadow,De.setValue(F,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(fi.envMap.value=Ot,fi.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Er&&(De.setValue(F,"toneMappingExposure",v.toneMappingExposure),Wt.needsLights&&Pu(fi,sa),xt&&j.fog===!0&&ft.refreshFogUniforms(fi,xt),ft.refreshMaterialUniforms(fi,j,Z,H,at),Ps.upload(F,Zo(Wt),fi,w)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ps.upload(F,Zo(Wt),fi,w),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&De.setValue(F,"center",q.center),De.setValue(F,"modelViewMatrix",q.modelViewMatrix),De.setValue(F,"normalMatrix",q.normalMatrix),De.setValue(F,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const cn=j.uniformsGroups;for(let oa=0,Du=cn.length;oa<Du;oa++)if(Tt.isWebGL2){const Jo=cn[oa];ot.update(Jo,di),ot.bind(Jo,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function Pu(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Lu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,z,Y){Dt.get(b.texture).__webglTexture=z,Dt.get(b.depthTexture).__webglTexture=Y;const j=Dt.get(b);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const Y=Dt.get(b);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,Y=0){E=b,A=z,C=Y;let j=!0,q=null,xt=!1,Rt=!1;if(b){const Ot=Dt.get(b);Ot.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(F.FRAMEBUFFER,null),j=!1):Ot.__webglFramebuffer===void 0?w.setupRenderTarget(b):Ot.__hasExternalTextures&&w.rebindTextures(b,Dt.get(b.texture).__webglTexture,Dt.get(b.depthTexture).__webglTexture);const Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Rt=!0);const zt=Dt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(zt[z])?q=zt[z][Y]:q=zt[z],xt=!0):Tt.isWebGL2&&b.samples>0&&w.useMultisampledRTT(b)===!1?q=Dt.get(b).__webglMultisampledFramebuffer:Array.isArray(zt)?q=zt[Y]:q=zt,T.copy(b.viewport),k.copy(b.scissor),G=b.scissorTest}else T.copy(P).multiplyScalar(Z).floor(),k.copy(R).multiplyScalar(Z).floor(),G=X;if(_t.bindFramebuffer(F.FRAMEBUFFER,q)&&Tt.drawBuffers&&j&&_t.drawBuffers(b,q),_t.viewport(T),_t.scissor(k),_t.setScissorTest(G),xt){const Ot=Dt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ot.__webglTexture,Y)}else if(Rt){const Ot=Dt.get(b.texture),Vt=z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ot.__webglTexture,Y||0,Vt)}U=-1},this.readRenderTargetPixels=function(b,z,Y,j,q,xt,Rt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){_t.bindFramebuffer(F.FRAMEBUFFER,Ut);try{const Ot=b.texture,Vt=Ot.format,zt=Ot.type;if(Vt!==yn&&vt.convert(Vt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=zt===Gr&&(lt.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&lt.has("EXT_color_buffer_float"));if(zt!==ri&&vt.convert(zt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===Jn&&(Tt.isWebGL2||lt.has("OES_texture_float")||lt.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-j&&Y>=0&&Y<=b.height-q&&F.readPixels(z,Y,j,q,vt.convert(Vt),vt.convert(zt),xt)}finally{const Ot=E!==null?Dt.get(E).__webglFramebuffer:null;_t.bindFramebuffer(F.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(b,z,Y=0){const j=Math.pow(2,-Y),q=Math.floor(z.image.width*j),xt=Math.floor(z.image.height*j);w.setTexture2D(z,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,b.x,b.y,q,xt),_t.unbindTexture()},this.copyTextureToTexture=function(b,z,Y,j=0){const q=z.image.width,xt=z.image.height,Rt=vt.convert(Y.format),Ut=vt.convert(Y.type);w.setTexture2D(Y,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment),z.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,j,b.x,b.y,q,xt,Rt,Ut,z.image.data):z.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,j,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Rt,z.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,j,b.x,b.y,Rt,Ut,z.image),j===0&&Y.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(b,z,Y,j,q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=b.max.x-b.min.x+1,Rt=b.max.y-b.min.y+1,Ut=b.max.z-b.min.z+1,Ot=vt.convert(j.format),Vt=vt.convert(j.type);let zt;if(j.isData3DTexture)w.setTexture3D(j,0),zt=F.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)w.setTexture2DArray(j,0),zt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const kt=F.getParameter(F.UNPACK_ROW_LENGTH),_e=F.getParameter(F.UNPACK_IMAGE_HEIGHT),$e=F.getParameter(F.UNPACK_SKIP_PIXELS),we=F.getParameter(F.UNPACK_SKIP_ROWS),Pn=F.getParameter(F.UNPACK_SKIP_IMAGES),le=Y.isCompressedTexture?Y.mipmaps[q]:Y.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,le.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,le.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,b.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,b.min.z),Y.isDataTexture||Y.isData3DTexture?F.texSubImage3D(zt,q,z.x,z.y,z.z,xt,Rt,Ut,Ot,Vt,le.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(zt,q,z.x,z.y,z.z,xt,Rt,Ut,Ot,le.data)):F.texSubImage3D(zt,q,z.x,z.y,z.z,xt,Rt,Ut,Ot,Vt,le),F.pixelStorei(F.UNPACK_ROW_LENGTH,kt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$e),F.pixelStorei(F.UNPACK_SKIP_ROWS,we),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pn),q===0&&j.generateMipmaps&&F.generateMipmap(zt),_t.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){A=0,C=0,E=null,_t.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===So?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===Ks?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Re?Ai:lh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ai?Re:Hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Bg extends Ph{}Bg.prototype.isWebGL1Renderer=!0;class wo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(t),this.density=e}clone(){return new wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zg extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Lh extends yr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xc=new N,Mc=new N,yc=new ve,Ba=new Eo,Ts=new $s;class Gg extends Ee{constructor(t=new Sn,e=new Lh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)xc.fromBufferAttribute(e,i-1),Mc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=xc.distanceTo(Mc);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(i),Ts.radius+=s,t.ray.intersectsSphere(Ts)===!1)return;yc.copy(i).invert(),Ba.copy(t.ray).applyMatrix4(yc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,h=new N,u=new N,p=new N,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let v=f,S=M-1;v<S;v+=d){const A=g.getX(v),C=g.getX(v+1);if(c.fromBufferAttribute(m,A),h.fromBufferAttribute(m,C),Ba.distanceSqToSegment(c,h,p,u)>l)continue;p.applyMatrix4(this.matrixWorld);const U=t.ray.origin.distanceTo(p);U<t.near||U>t.far||e.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let v=f,S=M-1;v<S;v+=d){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),Ba.distanceSqToSegment(c,h,p,u)>l)continue;p.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(p);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Sc=new N,Ec=new N;class kg extends Gg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Sc.fromBufferAttribute(e,i),Ec.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Sc.distanceTo(Ec);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rr extends Xe{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tn extends Sn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],p=[],d=[];let g=0;const _=[],m=n/2;let f=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(p,3)),this.setAttribute("uv",new Pe(d,2));function M(){const S=new N,A=new N;let C=0;const E=(e-t)/n;for(let U=0;U<=s;U++){const x=[],T=U/s,k=T*(e-t)+t;for(let G=0;G<=i;G++){const K=G/i,D=K*l+a,B=Math.sin(D),H=Math.cos(D);A.x=k*B,A.y=-T*n+m,A.z=k*H,u.push(A.x,A.y,A.z),S.set(B,E,H).normalize(),p.push(S.x,S.y,S.z),d.push(K,1-T),x.push(g++)}_.push(x)}for(let U=0;U<i;U++)for(let x=0;x<s;x++){const T=_[x][U],k=_[x+1][U],G=_[x+1][U+1],K=_[x][U+1];h.push(T,k,K),h.push(k,G,K),C+=6}c.addGroup(f,C,0),f+=C}function v(S){const A=g,C=new Ft,E=new N;let U=0;const x=S===!0?t:e,T=S===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*T,0),p.push(0,T,0),d.push(.5,.5),g++;const k=g;for(let G=0;G<=i;G++){const D=G/i*l+a,B=Math.cos(D),H=Math.sin(D);E.x=x*H,E.y=m*T,E.z=x*B,u.push(E.x,E.y,E.z),p.push(0,T,0),C.x=B*.5+.5,C.y=H*.5*T+.5,d.push(C.x,C.y),g++}for(let G=0;G<i;G++){const K=A+G,D=k+G;S===!0?h.push(D,D+1,K):h.push(D+1,D,K),U+=3}c.addGroup(f,U,S===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ks extends tn{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ks(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nr extends Sn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new N,u=new N,p=new N;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,f=(i+1)*(d-1)+g,M=(i+1)*d+g;o.push(_,m,M),o.push(m,f,M)}this.setIndex(o),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class se extends yr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bs extends se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ta extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const za=new ve,Tc=new N,bc=new N;class Ao{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bc),e.updateMatrixWorld(),za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hg extends Ao{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=zs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Cr extends ta{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Hg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const wc=new ve,Pr=new N,Ga=new N;class Vg extends Ao{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Pr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Pr),Ga.copy(n.position),Ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ga),n.updateMatrixWorld(),i.makeTranslation(-Pr.x,-Pr.y,-Pr.z),wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc)}}class Ac extends ta{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wg extends Ao{constructor(){super(new Eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ws extends ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Wg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ka extends ta{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xg extends kg{constructor(t=10,e=10,n=4473924,i=8947848){n=new yt(n),i=new yt(i);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let p=0,d=0,g=-a;p<=e;p++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=p===s?n:i;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new Sn;h.setAttribute("position",new Pe(l,3)),h.setAttribute("color",new Pe(c,3));const u=new Lh({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);const Cc={type:"change"},Ha={type:"start"},Pc={type:"end"},As=new Eo,Lc=new Kn,qg=Math.cos(70*Ld.DEG2RAD);class Yg extends Ni{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Pt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cc),n.update(),s=i.NONE},this.update=function(){const L=new N,ot=new Ii().setFromUnitVectors(t.up,new N(0,1,0)),At=ot.clone().invert(),St=new N,rt=new Ii,I=new N,ct=2*Math.PI;return function(It=null){const Lt=n.object.position;L.copy(Lt).sub(n.target),L.applyQuaternion(ot),a.setFromVector3(L),n.autoRotate&&s===i.NONE&&G(T(It)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Yt=n.minAzimuthAngle,jt=n.maxAzimuthAngle;isFinite(Yt)&&isFinite(jt)&&(Yt<-Math.PI?Yt+=ct:Yt>Math.PI&&(Yt-=ct),jt<-Math.PI?jt+=ct:jt>Math.PI&&(jt-=ct),Yt<=jt?a.theta=Math.max(Yt,Math.min(jt,a.theta)):a.theta=a.theta>(Yt+jt)/2?Math.max(Yt,a.theta):Math.min(jt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=P(a.radius):a.radius=P(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(At),Lt.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let de=!1;if(n.zoomToCursor&&C){let me=null;if(n.object.isPerspectiveCamera){const Qt=L.length();me=P(Qt*c);const xe=Qt-me;n.object.position.addScaledVector(S,xe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Qt=new N(A.x,A.y,0);Qt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),de=!0;const xe=new N(A.x,A.y,0);xe.unproject(n.object),n.object.position.sub(xe).add(Qt),n.object.updateMatrixWorld(),me=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;me!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(me).add(n.object.position):(As.origin.copy(n.object.position),As.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(As.direction))<qg?t.lookAt(n.target):(Lc.setFromNormalAndCoplanarPoint(n.object.up,n.target),As.intersectPlane(Lc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),de=!0);return c=1,C=!1,de||St.distanceToSquared(n.object.position)>o||8*(1-rt.dot(n.object.quaternion))>o||I.distanceToSquared(n.target)>0?(n.dispatchEvent(Cc),St.copy(n.object.position),rt.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Kt),n.domElement.removeEventListener("pointerdown",w),n.domElement.removeEventListener("pointercancel",V),n.domElement.removeEventListener("wheel",it),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",V),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Pt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Rc,l=new Rc;let c=1;const h=new N,u=new Ft,p=new Ft,d=new Ft,g=new Ft,_=new Ft,m=new Ft,f=new Ft,M=new Ft,v=new Ft,S=new N,A=new Ft;let C=!1;const E=[],U={};let x=!1;function T(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function k(L){const ot=Math.abs(L*.01);return Math.pow(.95,n.zoomSpeed*ot)}function G(L){l.theta-=L}function K(L){l.phi-=L}const D=function(){const L=new N;return function(At,St){L.setFromMatrixColumn(St,0),L.multiplyScalar(-At),h.add(L)}}(),B=function(){const L=new N;return function(At,St){n.screenSpacePanning===!0?L.setFromMatrixColumn(St,1):(L.setFromMatrixColumn(St,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(At),h.add(L)}}(),H=function(){const L=new N;return function(At,St){const rt=n.domElement;if(n.object.isPerspectiveCamera){const I=n.object.position;L.copy(I).sub(n.target);let ct=L.length();ct*=Math.tan(n.object.fov/2*Math.PI/180),D(2*At*ct/rt.clientHeight,n.object.matrix),B(2*St*ct/rt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(At*(n.object.right-n.object.left)/n.object.zoom/rt.clientWidth,n.object.matrix),B(St*(n.object.top-n.object.bottom)/n.object.zoom/rt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(L,ot){if(!n.zoomToCursor)return;C=!0;const At=n.domElement.getBoundingClientRect(),St=L-At.left,rt=ot-At.top,I=At.width,ct=At.height;A.x=St/I*2-1,A.y=-(rt/ct)*2+1,S.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function P(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function R(L){u.set(L.clientX,L.clientY)}function X(L){Q(L.clientX,L.clientX),f.set(L.clientX,L.clientY)}function O(L){g.set(L.clientX,L.clientY)}function W(L){p.set(L.clientX,L.clientY),d.subVectors(p,u).multiplyScalar(n.rotateSpeed);const ot=n.domElement;G(2*Math.PI*d.x/ot.clientHeight),K(2*Math.PI*d.y/ot.clientHeight),u.copy(p),n.update()}function J(L){M.set(L.clientX,L.clientY),v.subVectors(M,f),v.y>0?Z(k(v.y)):v.y<0&&$(k(v.y)),f.copy(M),n.update()}function at(L){_.set(L.clientX,L.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(_),n.update()}function tt(L){Q(L.clientX,L.clientY),L.deltaY<0?$(k(L.deltaY)):L.deltaY>0&&Z(k(L.deltaY)),n.update()}function ht(L){let ot=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),ot=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),ot=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),ot=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),ot=!0;break}ot&&(L.preventDefault(),n.update())}function gt(L){if(E.length===1)u.set(L.pageX,L.pageY);else{const ot=vt(L),At=.5*(L.pageX+ot.x),St=.5*(L.pageY+ot.y);u.set(At,St)}}function mt(L){if(E.length===1)g.set(L.pageX,L.pageY);else{const ot=vt(L),At=.5*(L.pageX+ot.x),St=.5*(L.pageY+ot.y);g.set(At,St)}}function Et(L){const ot=vt(L),At=L.pageX-ot.x,St=L.pageY-ot.y,rt=Math.sqrt(At*At+St*St);f.set(0,rt)}function F(L){n.enableZoom&&Et(L),n.enablePan&&mt(L)}function Zt(L){n.enableZoom&&Et(L),n.enableRotate&&gt(L)}function lt(L){if(E.length==1)p.set(L.pageX,L.pageY);else{const At=vt(L),St=.5*(L.pageX+At.x),rt=.5*(L.pageY+At.y);p.set(St,rt)}d.subVectors(p,u).multiplyScalar(n.rotateSpeed);const ot=n.domElement;G(2*Math.PI*d.x/ot.clientHeight),K(2*Math.PI*d.y/ot.clientHeight),u.copy(p)}function Tt(L){if(E.length===1)_.set(L.pageX,L.pageY);else{const ot=vt(L),At=.5*(L.pageX+ot.x),St=.5*(L.pageY+ot.y);_.set(At,St)}m.subVectors(_,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(_)}function _t(L){const ot=vt(L),At=L.pageX-ot.x,St=L.pageY-ot.y,rt=Math.sqrt(At*At+St*St);M.set(0,rt),v.set(0,Math.pow(M.y/f.y,n.zoomSpeed)),Z(v.y),f.copy(M);const I=(L.pageX+ot.x)*.5,ct=(L.pageY+ot.y)*.5;Q(I,ct)}function qt(L){n.enableZoom&&_t(L),n.enablePan&&Tt(L)}function Dt(L){n.enableZoom&&_t(L),n.enableRotate&&lt(L)}function w(L){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",y),n.domElement.addEventListener("pointerup",V)),Gt(L),L.pointerType==="touch"?Bt(L):st(L))}function y(L){n.enabled!==!1&&(L.pointerType==="touch"?et(L):nt(L))}function V(L){Nt(L),E.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",y),n.domElement.removeEventListener("pointerup",V)),n.dispatchEvent(Pc),s=i.NONE}function st(L){let ot;switch(L.button){case 0:ot=n.mouseButtons.LEFT;break;case 1:ot=n.mouseButtons.MIDDLE;break;case 2:ot=n.mouseButtons.RIGHT;break;default:ot=-1}switch(ot){case Fi.DOLLY:if(n.enableZoom===!1)return;X(L),s=i.DOLLY;break;case Fi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;O(L),s=i.PAN}else{if(n.enableRotate===!1)return;R(L),s=i.ROTATE}break;case Fi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;R(L),s=i.ROTATE}else{if(n.enablePan===!1)return;O(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ha)}function nt(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;W(L);break;case i.DOLLY:if(n.enableZoom===!1)return;J(L);break;case i.PAN:if(n.enablePan===!1)return;at(L);break}}function it(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Ha),tt(bt(L)),n.dispatchEvent(Pc))}function bt(L){const ot=L.deltaMode,At={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(ot){case 1:At.deltaY*=16;break;case 2:At.deltaY*=100;break}return L.ctrlKey&&!x&&(At.deltaY*=10),At}function ft(L){L.key==="Control"&&(x=!0,document.addEventListener("keyup",Mt,{passive:!0,capture:!0}))}function Mt(L){L.key==="Control"&&(x=!1,document.removeEventListener("keyup",Mt,{passive:!0,capture:!0}))}function Pt(L){n.enabled===!1||n.enablePan===!1||ht(L)}function Bt(L){switch(Ct(L),E.length){case 1:switch(n.touches.ONE){case Bi.ROTATE:if(n.enableRotate===!1)return;gt(L),s=i.TOUCH_ROTATE;break;case Bi.PAN:if(n.enablePan===!1)return;mt(L),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Bi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(L),s=i.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Zt(L),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ha)}function et(L){switch(Ct(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;lt(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Tt(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;qt(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(L),n.update();break;default:s=i.NONE}}function Kt(L){n.enabled!==!1&&L.preventDefault()}function Gt(L){E.push(L.pointerId)}function Nt(L){delete U[L.pointerId];for(let ot=0;ot<E.length;ot++)if(E[ot]==L.pointerId){E.splice(ot,1);return}}function Ct(L){let ot=U[L.pointerId];ot===void 0&&(ot=new Ft,U[L.pointerId]=ot),ot.set(L.pageX,L.pageY)}function vt(L){const ot=L.pointerId===E[0]?E[1]:E[0];return U[ot]}n.domElement.addEventListener("contextmenu",Kt),n.domElement.addEventListener("pointerdown",w),n.domElement.addEventListener("pointercancel",V),n.domElement.addEventListener("wheel",it,{passive:!1}),document.addEventListener("keydown",ft,{passive:!0,capture:!0}),this.update()}}function Fn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Dh(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Hr={duration:.5,overwrite:!1,delay:0},Ro,Le,oe,pn=1e8,ie=1/pn,so=Math.PI*2,jg=so/4,Zg=0,Ih=Math.sqrt,Kg=Math.cos,$g=Math.sin,Ce=function(t){return typeof t=="string"},pe=function(t){return typeof t=="function"},Vn=function(t){return typeof t=="number"},Co=function(t){return typeof t>"u"},Cn=function(t){return typeof t=="object"},qe=function(t){return t!==!1},Po=function(){return typeof window<"u"},Rs=function(t){return pe(t)||Ce(t)},Uh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fe=Array.isArray,Jg=/random\([^)]+\)/g,Qg=/,\s*/g,Dc=/(?:-?\.?\d|\.)+/gi,Nh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Va=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Oh=/[+-]=-?[.\d]+/,t0=/[^,'"\[\]\s]+/gi,e0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,he,Tn,ao,Lo,on={},Hs={},Fh,Bh=function(t){return(Hs=_r(t,on))&&Ke},Do=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Vr=function(t,e){return!e&&console.warn(t)},zh=function(t,e){return t&&(on[t]=e)&&Hs&&(Hs[t]=e)||on},Wr=function(){return 0},n0={suppressEvents:!0,isStart:!0,kill:!1},Ls={suppressEvents:!0,kill:!1},i0={suppressEvents:!0},Io={},si=[],oo={},Gh,en={},Wa={},Ic=30,Ds=[],Uo="",No=function(t){var e=t[0],n,i;if(Cn(e)||pe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ds.length;i--&&!Ds[i].targetTest(e););n=Ds[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new lu(t[i],n)))||t.splice(i,1);return t},Ri=function(t){return t._gsap||No(mn(t))[0]._gsap},kh=function(t,e,n){return(n=t[e])&&pe(n)?t[e]():Co(n)&&t.getAttribute&&t.getAttribute(e)||n},Ye=function(t,e){return(t=t.split(",")).forEach(e)||t},ge=function(t){return Math.round(t*1e5)/1e5||0},ce=function(t){return Math.round(t*1e7)/1e7||0},cr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},r0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Vs=function(){var t=si.length,e=si.slice(0),n,i;for(oo={},si.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Oo=function(t){return!!(t._initted||t._startAt||t.add)},Hh=function(t,e,n,i){si.length&&!Le&&Vs(),t.render(e,n,!!(Le&&e<0&&Oo(t))),si.length&&!Le&&Vs()},Vh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(t0).length<2?e:Ce(t)?t.trim():t},Wh=function(t){return t},ln=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},s0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},_r=function(t,e){for(var n in e)t[n]=e[n];return t},Uc=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Cn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ws=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Or=function(t){var e=t.parent||he,n=t.keyframes?s0(Fe(t.keyframes)):ln;if(qe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},a0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Xh=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ea=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},li=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ci=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},o0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},lo=function(t,e,n,i){return t._startAt&&(Le?t._startAt.revert(Ls):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},l0=function r(t){return!t||t._ts&&r(t.parent)},Nc=function(t){return t._repeat?gr(t._tTime,t=t.duration()+t._rDelay)*t:0},gr=function(t,e){var n=Math.floor(t=ce(t/e));return t&&n===t?n-1:n},Xs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},na=function(t){return t._end=ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||ie)||0))},ia=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),na(t),n._dirty||Ci(n,t)),t},qh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Xs(t.rawTime(),e),(!e._dur||Qr(0,e.totalDuration(),n)-e._tTime>ie)&&e.render(n,!0)),Ci(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ie}},wn=function(t,e,n,i){return e.parent&&li(e),e._start=ce((Vn(n)?n:n||t!==he?un(t,n,e):t._time)+e._delay),e._end=ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Xh(t,e,"_first","_last",t._sort?"_start":0),co(e)||(t._recent=e),i||qh(t,e),t._ts<0&&ia(t,t._tTime),t},Yh=function(t,e){return(on.ScrollTrigger||Do("scrollTrigger",e))&&on.ScrollTrigger.create(e,t)},jh=function(t,e,n,i,s){if(Bo(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Le&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Gh!==nn.frame)return si.push(t),t._lazy=[s,i],1},c0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},co=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},h0=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&c0(t)&&!(!t._initted&&co(t))||(t._ts<0||t._dp._ts<0)&&!co(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Qr(0,t._tDur,e),h=gr(l,a),t._yoyo&&h&1&&(o=1-o),h!==gr(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Le||i||t._zTime===ie||!e&&t._zTime){if(!t._initted&&jh(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ie:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&lo(t,e,n,!0),t._onUpdate&&!n&&rn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&rn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&li(t,1),!n&&!Le&&(rn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},u0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},vr=function(t,e,n,i){var s=t._repeat,o=ce(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ce(o*(s+1)+t._rDelay*s):o,a>0&&!i&&ia(t,t._tTime=t._tDur*a),t.parent&&na(t),n||Ci(t.parent,t),t},Oc=function(t){return t instanceof Ve?Ci(t):vr(t,t._dur)},d0={_start:0,endTime:Wr,totalDuration:Wr},un=function r(t,e,n){var i=t.labels,s=t._recent||d0,o=t.duration()>=pn?s.endTime(!1):t._dur,a,l,c;return Ce(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Fe(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Fr=function(t,e,n){var i=Vn(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=qe(l.vars.inherit)&&l.parent;o.immediateRender=qe(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ye(e[0],o,e[s+1])},ui=function(t,e){return t||t===0?e(t):e},Qr=function(t,e,n){return n<t?t:n>e?e:n},Oe=function(t,e){return!Ce(t)||!(e=e0.exec(t))?"":e[1]},f0=function(t,e,n){return ui(n,function(i){return Qr(t,e,i)})},ho=[].slice,Zh=function(t,e){return t&&Cn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Cn(t[0]))&&!t.nodeType&&t!==Tn},p0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ce(i)&&!e||Zh(i,1)?(s=n).push.apply(s,mn(i)):n.push(i)})||n},mn=function(t,e,n){return oe&&!e&&oe.selector?oe.selector(t):Ce(t)&&!n&&(ao||!xr())?ho.call((e||Lo).querySelectorAll(t),0):Fe(t)?p0(t,n):Zh(t)?ho.call(t,0):t?[t]:[]},uo=function(t){return t=mn(t)[0]||Vr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return mn(e,n.querySelectorAll?n:n===t?Vr("Invalid scope")||Lo.createElement("div"):t)}},Kh=function(t){return t.sort(function(){return .5-Math.random()})},$h=function(t){if(pe(t))return t;var e=Cn(t)?t:{each:t},n=Pi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Ce(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(p,d,g){var _=(g||e).length,m=o[_],f,M,v,S,A,C,E,U,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,pn])[1],!x){for(E=-pn;E<(E=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],f=l?Math.min(x,_)*h-.5:i%x,M=x===pn?0:l?_*u/x-.5:i/x|0,E=0,U=pn,C=0;C<_;C++)v=C%x-f,S=M-(C/x|0),m[C]=A=c?Math.abs(c==="y"?S:v):Ih(v*v+S*S),A>E&&(E=A),A<U&&(U=A);i==="random"&&Kh(m),m.max=E-U,m.min=U,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Oe(e.amount||e.each)||0,n=n&&_<0?A0(n):n}return _=(m[p]-m.min)/m.max||0,ce(m.b+(n?n(_):_)*m.v)+m.u}},fo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Vn(n)?0:Oe(n))}},Jh=function(t,e){var n=Fe(t),i,s;return!n&&Cn(t)&&(i=n=t.radius||pn,t.values?(t=mn(t.values),(s=!Vn(t[0]))&&(i*=i)):t=fo(t.increment)),ui(e,n?pe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=pn,h=0,u=t.length,p,d;u--;)s?(p=t[u].x-a,d=t[u].y-l,p=p*p+d*d):p=Math.abs(t[u]-a),p<c&&(c=p,h=u);return h=!i||c<=i?t[h]:o,s||h===o||Vn(o)?h:h+Oe(o)}:fo(t))},Qh=function(t,e,n,i){return ui(Fe(t)?!e:n===!0?!!(n=0):!i,function(){return Fe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},m0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},_0=function(t,e){return function(n){return t(parseFloat(n))+(e||Oe(n))}},g0=function(t,e,n){return eu(t,e,0,1,n)},tu=function(t,e,n){return ui(n,function(i){return t[~~e(i)]})},v0=function r(t,e,n){var i=e-t;return Fe(t)?tu(t,r(0,t.length),e):ui(n,function(s){return(i+(s-t)%i)%i+t})},x0=function r(t,e,n){var i=e-t,s=i*2;return Fe(t)?tu(t,r(0,t.length-1),e):ui(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Xr=function(t){return t.replace(Jg,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Qg);return Qh(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},eu=function(t,e,n,i,s){var o=e-t,a=i-n;return ui(s,function(l){return n+((l-t)/o*a||0)})},M0=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Ce(t),a={},l,c,h,u,p;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Fe(t)&&!Fe(e)){for(h=[],u=t.length,p=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(p,~~g);return h[_](g-_)},n=e}else i||(t=_r(Fe(t)?[]:{},t));if(!h){for(l in e)Fo.call(a,t,l,"get",e[l]);s=function(g){return ko(g,a)||(o?t.p:t)}}}return ui(n,s)},Fc=function(t,e,n){var i=t.labels,s=pn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},rn=function(t,e,n){var i=t.vars,s=i[e],o=oe,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&si.length&&Vs(),a&&(oe=a),h=l?s.apply(c,l):s.call(c),oe=o,h},Dr=function(t){return li(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Le),t.progress()<1&&rn(t,"onInterrupt"),t},ar,nu=[],iu=function(t){if(t)if(t=!t.name&&t.default||t,Po()||t.headless){var e=t.name,n=pe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Wr,render:ko,add:Fo,kill:F0,modifier:O0,rawVars:0},o={targetTest:0,get:0,getSetter:Go,aliases:{},register:0};if(xr(),t!==i){if(en[e])return;ln(i,ln(Ws(t,s),o)),_r(i.prototype,_r(s,Ws(t,o))),en[i.prop=e]=i,t.targetTest&&(Ds.push(i),Io[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}zh(e,i),t.register&&t.register(Ke,i,je)}else nu.push(t)},ne=255,Ir={aqua:[0,ne,ne],lime:[0,ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ne],navy:[0,0,128],white:[ne,ne,ne],olive:[128,128,0],yellow:[ne,ne,0],orange:[ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ne,0,0],pink:[ne,192,203],cyan:[0,ne,ne],transparent:[ne,ne,ne,0]},Xa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ne+.5|0},ru=function(t,e,n){var i=t?Vn(t)?[t>>16,t>>8&ne,t&ne]:0:Ir.black,s,o,a,l,c,h,u,p,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ir[t])i=Ir[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ne,i&ne,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ne,t&ne]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Dc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Xa(l+1/3,s,o),i[1]=Xa(l,s,o),i[2]=Xa(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Nh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Dc)||Ir.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/ne,o=i[1]/ne,a=i[2]/ne,u=Math.max(s,o,a),p=Math.min(s,o,a),h=(u+p)/2,u===p?l=c=0:(d=u-p,c=h>.5?d/(2-u-p):d/(u+p),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},su=function(t){var e=[],n=[],i=-1;return t.split(ai).forEach(function(s){var o=s.match(sr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Bc=function(t,e,n){var i="",s=(t+i).match(ai),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(p){return(p=ru(p,e,1))&&o+(e?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(h=su(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ai,"1").split(sr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ai),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},ai=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ir)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),y0=/hsl[a]?\(/,au=function(t){var e=t.join(" "),n;if(ai.lastIndex=0,ai.test(e))return n=y0.test(e),t[1]=Bc(t[1],n),t[0]=Bc(t[0],n,su(t[1])),!0},qr,nn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,p,d,g=function _(m){var f=r()-i,M=m===!0,v,S,A,C;if((f>t||f<0)&&(n+=f-e),i+=f,A=i-n,v=A-o,(v>0||M)&&(C=++u.frame,p=A-u.time*1e3,u.time=A=A/1e3,o+=v+(v>=s?4:s-v),S=1),M||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](A,p,C,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return p/(1e3/(m||60))},wake:function(){Fh&&(!ao&&Po()&&(Tn=ao=window,Lo=Tn.document||{},on.gsap=Ke,(Tn.gsapVersions||(Tn.gsapVersions=[])).push(Ke.version),Bh(Hs||Tn.GreenSockGlobals||!Tn.gsap&&Tn||{}),nu.forEach(iu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},qr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),qr=0,c=Wr},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,f,M){var v=f?function(S,A,C,E){m(S,A,C,E),u.remove(v)}:m;return u.remove(m),a[M?"unshift":"push"](v),xr(),v},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&d>=f&&d--},_listeners:a},u}(),xr=function(){return!qr&&nn.wake()},Jt={},S0=/^[\d.\-M][\d.\-,\s]/,E0=/["']/g,T0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(E0,"").trim():+c,i=l.substr(a+1).trim();return e},b0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},w0=function(t){var e=(t+"").split("("),n=Jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[T0(e[1])]:b0(t).split(",").map(Vh)):Jt._CE&&S0.test(t)?Jt._CE("",t):n},A0=function(t){return function(e){return 1-t(1-e)}},Pi=function(t,e){return t&&(pe(t)?t:Jt[t]||w0(t))||e},Oi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Ye(t,function(a){Jt[a]=on[a]=s,Jt[o=a.toLowerCase()]=n;for(var l in s)Jt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Jt[a+"."+l]=s[l]}),s},ou=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},qa=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/so*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*$g((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:ou(a);return s=so/s,l.config=function(c,h){return r(t,c,h)},l},Ya=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:ou(n);return i.config=function(s){return r(t,s)},i};Ye("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Oi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Jt.Linear.easeNone=Jt.none=Jt.Linear.easeIn;Oi("Elastic",qa("in"),qa("out"),qa());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Oi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Oi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Oi("Circ",function(r){return-(Ih(1-r*r)-1)});Oi("Sine",function(r){return r===1?1:-Kg(r*jg)+1});Oi("Back",Ya("in"),Ya("out"),Ya());Jt.SteppedEase=Jt.steps=on.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ie;return function(a){return((i*Qr(0,o,a)|0)+s)*n}}};Hr.ease=Jt["quad.out"];Ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Uo+=r+","+r+"Params,"});var lu=function(t,e){this.id=Zg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:kh,this.set=e?e.getSetter:Go},Yr=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,vr(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),qr||nn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,vr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(xr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ia(this,n),!s._dp||s.parent||qh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ie||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Nc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Nc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?gr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ie?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Xs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ie?0:this._rts,this.totalTime(Qr(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),na(this),o0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ie&&(this._tTime-=ie)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ce(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=i0);var i=Le;return Le=n,Oo(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Le=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Oc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Oc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(un(this,n),qe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qe(i)),this._dur||(this._zTime=-ie),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ie:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ie,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ie)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=pe(n)?n:Wh,l=function(){var h=i.then;i.then=null,s&&s(),pe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Dr(this)},r}();ln(Yr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ie,_prom:0,_ps:!1,_rts:1});var Ve=function(r){Dh(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=qe(n.sortChildren),he&&wn(n.parent||he,Fn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Yh(Fn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Fr(0,arguments,this),this},e.from=function(i,s,o){return Fr(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Fr(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Or(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ye(i,s,un(this,o),1),this},e.call=function(i,s,o){return wn(this,ye.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ye(i,o,un(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Or(o).immediateRender=qe(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Or(a).immediateRender=qe(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ce(i),u=this._zTime<0!=i<0&&(this._initted||!c),p,d,g,_,m,f,M,v,S,A,C,E;if(this!==he&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),p=h,S=this._start,v=this._ts,f=!v,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(p=ce(h%m),h===l?(_=this._repeat,p=c):(A=ce(h/m),_=~~A,_&&_===A&&(p=c,_--),p>c&&(p=c)),A=gr(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),C&&_&1&&(p=c-p,E=1),_!==A&&!this._lock){var U=C&&A&1,x=U===(C&&_&1);if(_<A&&(U=!U),a=U?0:h%c?c:h,this._lock=1,this.render(a||(E?0:ce(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=U?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=u0(this,ce(a),ce(p)),M&&(h-=p-(p=M._start))),this._tTime=h,this._time=p,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!A&&(rn(this,"onStart"),this._tTime!==h))return this;if(p>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||p>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(p-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(p-d._start)*d._ts,s,o),p!==this._time||!this._ts&&!f){M=0,g&&(h+=this._zTime=-ie);break}}d=g}else{d=this._last;for(var T=i<0?i:p;d;){if(g=d._prev,(d._act||T<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,o||Le&&Oo(d)),p!==this._time||!this._ts&&!f){M=0,g&&(h+=this._zTime=T?-ie:ie);break}}d=g}}if(M&&!s&&(this.pause(),M.render(p>=a?0:-ie)._zTime=p>=a?1:-1,this._ts))return this._start=S,na(this),this.render(i,s,o);this._onUpdate&&!s&&rn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&li(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(rn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Vn(s)||(s=un(this,s,i)),!(i instanceof Yr)){if(Fe(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ce(i))return this.addLabel(i,s);if(pe(i))i=ye.delayedCall(0,i);else return this}return this!==i?wn(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-pn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ye?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ce(i)?this.removeLabel(i):pe(i)?this.killTweensOf(i):(i.parent===this&&ea(this,i),i===this._recent&&(this._recent=this._last),Ci(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ce(nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=un(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=ye.delayedCall(0,s||Wr,o);return a.data="isPause",this._hasPause=1,wn(this,a,un(this,i))},e.removePause=function(i){var s=this._first;for(i=un(this,i);s;)s._start===i&&s.data==="isPause"&&li(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Qn!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=mn(i),l=this._first,c=Vn(s),h;l;)l instanceof ye?r0(l._targets,a)&&(c?(!Qn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=un(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,p=l.immediateRender,d,g=ye.to(o,ln({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ie,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&vr(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return p?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ln({startAt:{time:un(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Fc(this,un(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Fc(this,un(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ie)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=ce(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ci(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ci(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=pn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,wn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=ce(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;vr(o,o===he&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(he._ts&&(Hh(he,Xs(i,he)),Gh=nn.frame),nn.frame>=Ic){Ic+=an.autoSleep||120;var s=he._first;if((!s||!s._ts)&&an.autoSleep&&nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||nn.sleep()}}},t}(Yr);ln(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var R0=function(t,e,n,i,s,o,a){var l=new je(this._pt,t,e,0,1,pu,null,s),c=0,h=0,u,p,d,g,_,m,f,M;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=Xr(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),p=n.match(Va)||[];u=Va.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==p[h++]&&(m=parseFloat(p[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?cr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Va.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Oh.test(i)||f)&&(l.e=0),this._pt=l,l},Fo=function(t,e,n,i,s,o,a,l,c,h){pe(i)&&(i=i(s||0,t,o));var u=t[e],p=n!=="get"?n:pe(u)?c?t[e.indexOf("set")||!pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=pe(u)?c?I0:du:zo,g;if(Ce(i)&&(~i.indexOf("random(")&&(i=Xr(i)),i.charAt(1)==="="&&(g=cr(p,i)+(Oe(p)||0),(g||g===0)&&(i=g))),!h||p!==i||po)return!isNaN(p*i)&&i!==""?(g=new je(this._pt,t,e,+p||0,i-(p||0),typeof u=="boolean"?N0:fu,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&Do(e,i),R0.call(this,t,e,p,i,d,l||an.stringFilter,c))},C0=function(t,e,n,i,s){if(pe(t)&&(t=Br(t,s,e,n,i)),!Cn(t)||t.style&&t.nodeType||Fe(t)||Uh(t))return Ce(t)?Br(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Br(t[a],s,e,n,i);return o},cu=function(t,e,n,i,s,o){var a,l,c,h;if(en[t]&&(a=new en[t]).init(s,a.rawVars?e[t]:C0(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new je(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ar))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Qn,po,Bo=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,p=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,f=t.parent,M=f&&f.data==="nested"?f.vars.targets:m,v=t._overwrite==="auto"&&!Ro,S=t.timeline,A=i.easeReverse||u,C,E,U,x,T,k,G,K,D,B,H,Z,$;if(S&&(!p||!s)&&(s="none"),t._ease=Pi(s,Hr.ease),t._rEase=A&&(Pi(A)||t._ease),t._from=!S&&!!i.runBackwards,t._from&&(t.ratio=1),!S||p&&!i.stagger){if(K=m[0]?Ri(m[0]).harness:0,Z=K&&i[K.prop],C=Ws(i,Io),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?Ls:n0),_._lazy=0),o){if(li(t._startAt=ye.set(m,ln({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&qe(l),startAt:null,delay:0,onUpdate:c&&function(){return rn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le||!a&&!d)&&t._startAt.revert(Ls),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),U=ln({overwrite:!1,data:"isFromStart",lazy:a&&!_&&qe(l),immediateRender:a,stagger:0,parent:f},C),Z&&(U[K.prop]=Z),li(t._startAt=ye.set(m,U)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le?t._startAt.revert(Ls):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ie,ie);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&qe(l)||l&&!g,E=0;E<m.length;E++){if(T=m[E],G=T._gsap||No(m)[E]._gsap,t._ptLookup[E]=B={},oo[G.id]&&si.length&&Vs(),H=M===m?E:M.indexOf(T),K&&(D=new K).init(T,Z||C,t,H,M)!==!1&&(t._pt=x=new je(t._pt,T,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(Q){B[Q]=x}),D.priority&&(k=1)),!K||Z)for(U in C)en[U]&&(D=cu(U,C,t,H,T,M))?D.priority&&(k=1):B[U]=x=Fo.call(t,T,U,"get",C[U],H,M,0,i.stringFilter);t._op&&t._op[E]&&t.kill(T,t._op[E]),v&&t._pt&&(Qn=t,he.killTweensOf(T,B,t.globalTime(e)),$=!t.parent,Qn=0),t._pt&&l&&(oo[G.id]=1)}k&&mu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,p&&e<=0&&S.render(pn,!0,!0)},P0=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,p,d;if(!c)for(c=t._ptCache[e]=[],p=t._ptLookup,d=t._targets.length;d--;){if(h=p[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return po=1,t.vars[e]="+=0",Bo(t,a),po=0,l?Vr(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=ge(n)+Oe(u.e)),u.b&&(u.b=h.s+Oe(u.b))},L0=function(t,e){var n=t[0]?Ri(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=_r({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},D0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Fe(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Br=function(t,e,n,i,s){return pe(t)?t.call(e,n,i,s):Ce(t)&&~t.indexOf("random(")?Xr(t):t},hu=Uo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",uu={};Ye(hu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return uu[r]=1});var ye=function(r){Dh(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Or(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,p=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=i.parent||he,M=(Fe(n)||Uh(n)?Vn(n[0]):"length"in i)?[n]:mn(n),v,S,A,C,E,U,x,T;if(a._targets=M.length?No(M):Vr("GSAP target "+n+" not found. https://gsap.com",!an.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||p||Rs(c)||Rs(h)){i=a.vars;var k=i.easeReverse||i.yoyoEase;if(v=a.timeline=new Ve({data:"nested",defaults:_||{},targets:f&&f.data==="nested"?f.vars.targets:M}),v.kill(),v.parent=v._dp=Fn(a),v._start=0,p||Rs(c)||Rs(h)){if(C=M.length,x=p&&$h(p),Cn(p))for(E in p)~hu.indexOf(E)&&(T||(T={}),T[E]=p[E]);for(S=0;S<C;S++)A=Ws(i,uu),A.stagger=0,k&&(A.easeReverse=k),T&&_r(A,T),U=M[S],A.duration=+Br(c,Fn(a),S,U,M),A.delay=(+Br(h,Fn(a),S,U,M)||0)-a._delay,!p&&C===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),v.to(U,A,x?x(S,U,M):0),v._ease=Jt.none;v.duration()?c=h=0:a.timeline=0}else if(g){Or(ln(v.vars.defaults,{ease:"none"})),v._ease=Pi(g.ease||i.ease||"none");var G=0,K,D,B;if(Fe(g))g.forEach(function(H){return v.to(M,H,">")}),v.duration();else{A={};for(E in g)E==="ease"||E==="easeEach"||D0(E,g[E],A,g.easeEach);for(E in A)for(K=A[E].sort(function(H,Z){return H.t-Z.t}),G=0,S=0;S<K.length;S++)D=K[S],B={ease:D.e,duration:(D.t-(S?K[S-1].t:0))/100*c},B[E]=D.v,v.to(M,B,G),G+=B.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Ro&&(Qn=Fn(a),he.killTweensOf(M),Qn=0),wn(f,Fn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===ce(f._time)&&qe(u)&&l0(Fn(a))&&f.data!=="nested")&&(a._tTime=-ie,a.render(Math.max(0,-h)||0)),m&&Yh(Fn(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ie&&!h?l:i<ie?0:i,p,d,g,_,m,f,M,v;if(!c)h0(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(p=u,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(p=ce(u%_),u===l?(g=this._repeat,p=c):(m=ce(u/_),g=~~m,g&&g===m?(p=c,g--):p>c&&(p=c)),f=this._yoyo&&g&1,f&&(p=c-p),m=gr(this._tTime,_),p===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!f&&!this._lock&&p!==_&&this._initted&&(this._lock=o=1,this.render(ce(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(jh(this,h?i:p,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=p<a;if(S!==this._inv){var A=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(S?-1:1)/A:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((p-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(p/c);if(this._from&&(this.ratio=M=1-M),this._tTime=u,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!s&&!m&&(rn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(p/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&lo(this,i,s,o),rn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&rn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&lo(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&li(this,1),!s&&!(h&&!a)&&(u||a||f)&&(rn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){qr||nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Bo(this,c),h=this._ease(c/this._dur),P0(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(ia(this,0),this.parent||Xh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Dr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Le),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qn&&Qn.vars.overwrite!==!0)._first||Dr(this),this.parent&&o!==this.timeline.totalDuration()&&vr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?mn(i):a,c=this._ptLookup,h=this._pt,u,p,d,g,_,m,f;if((!s||s==="all")&&a0(a,l))return s==="all"&&(this._pt=0),Dr(this);for(u=this._op=this._op||[],s!=="all"&&(Ce(s)&&(_={},Ye(s,function(M){return _[M]=1}),s=_),s=L0(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){p=c[f],s==="all"?(u[f]=s,g=p,d={}):(d=u[f]=u[f]||{},g=s);for(_ in g)m=p&&p[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ea(this,m,"_pt"),delete p[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Dr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Fr(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Fr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return he.killTweensOf(i,s,o)},t}(Yr);ln(ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ye("staggerTo,staggerFrom,staggerFromTo",function(r){ye[r]=function(){var t=new Ve,e=ho.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var zo=function(t,e,n){return t[e]=n},du=function(t,e,n){return t[e](n)},I0=function(t,e,n,i){return t[e](i.fp,n)},U0=function(t,e,n){return t.setAttribute(e,n)},Go=function(t,e){return pe(t[e])?du:Co(t[e])&&t.setAttribute?U0:zo},fu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},N0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},pu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ko=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},O0=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},F0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ea(this,e,"_pt"):e.dep||(n=1),e=i;return!n},B0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},mu=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},je=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||fu,this.d=l||this,this.set=c||zo,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=B0,this.m=n,this.mt=s,this.tween=i},r}();Ye(Uo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Io[r]=1});on.TweenMax=on.TweenLite=ye;on.TimelineLite=on.TimelineMax=Ve;he=new Ve({sortChildren:!1,defaults:Hr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=au;var Li=[],Is={},z0=[],zc=0,G0=0,ja=function(t){return(Is[t]||z0).map(function(e){return e()})},mo=function(){var t=Date.now(),e=[];t-zc>2&&(ja("matchMediaInit"),Li.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Tn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),ja("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zc=t,ja("matchMedia"))},_u=function(){function r(e,n){this.selector=n&&uo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=G0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){pe(n)&&(s=i,i=n,n=pe);var o=this,a=function(){var c=oe,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=uo(s)),oe=o,u=i.apply(o,arguments),pe(u)&&o._r.push(u),oe=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===pe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=oe;oe=null,n(this),oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ve?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ye)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Li.length;o--;)Li[o].id===this.id&&Li.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),k0=function(){function r(e){this.contexts=[],this.scope=e,oe&&oe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Cn(n)||(n={matches:n});var o=new _u(0,s||this.scope),a=o.conditions={},l,c,h;oe&&!o.selector&&(o.selector=oe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Tn.matchMedia(n[c]),l&&(Li.indexOf(o)<0&&Li.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(mo):l.addEventListener("change",mo)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),qs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return iu(i)})},timeline:function(t){return new Ve(t)},getTweensOf:function(t,e){return he.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ce(t)&&(t=mn(t)[0]);var s=Ri(t||{}).get,o=n?Wh:Vh;return n==="native"&&(n=""),t&&(e?o((en[e]&&en[e].get||s)(t,e,n,i)):function(a,l,c){return o((en[a]&&en[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=mn(t),t.length>1){var i=t.map(function(h){return Ke.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=en[e],a=Ri(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;ar._pt=0,u.init(t,n?h+n:h,ar,0,[t]),u.render(1,u),ar._pt&&ko(1,ar)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Ke.to(t,ln((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return he.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Pi(t.ease,Hr.ease)),Uc(Hr,t||{})},config:function(t){return Uc(an,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!en[a]&&!on[a]&&Vr(e+" effect requires "+a+" plugin.")}),Wa[e]=function(a,l,c){return n(mn(a),ln(l||{},s),c)},o&&(Ve.prototype[e]=function(a,l,c){return this.add(Wa[e](a,Cn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Jt[t]=Pi(e)},parseEase:function(t,e){return arguments.length?Pi(t,e):Jt},getById:function(t){return he.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ve(t),i,s;for(n.smoothChildTiming=qe(t.smoothChildTiming),he.remove(n),n._dp=0,n._time=n._tTime=he._time,i=he._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ye&&i.vars.onComplete===i._targets[0]))&&wn(n,i,i._start-i._delay),i=s;return wn(he,n,0),n},context:function(t,e){return t?new _u(t,e):oe},matchMedia:function(t){return new k0(t)},matchMediaRefresh:function(){return Li.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||mo()},addEventListener:function(t,e){var n=Is[t]||(Is[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Is[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:v0,wrapYoyo:x0,distribute:$h,random:Qh,snap:Jh,normalize:g0,getUnit:Oe,clamp:f0,splitColor:ru,toArray:mn,selector:uo,mapRange:eu,pipe:m0,unitize:_0,interpolate:M0,shuffle:Kh},install:Bh,effects:Wa,ticker:nn,updateRoot:Ve.updateRoot,plugins:en,globalTimeline:he,core:{PropTween:je,globals:zh,Tween:ye,Timeline:Ve,Animation:Yr,getCache:Ri,_removeLinkedListItem:ea,reverting:function(){return Le},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return Ro=t}}};Ye("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return qs[r]=ye[r]});nn.add(Ve.updateRoot);ar=qs.to({},{duration:0});var H0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},V0=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=H0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Za=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ce(s)&&(l={},Ye(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}V0(a,s)}}}},Ke=qs.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Le?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Za("roundProps",fo),Za("modifiers"),Za("snap",Jh))||qs;ye.version=Ve.version=Ke.version="3.15.0";Fh=1;Po()&&xr();Jt.Power0;Jt.Power1;Jt.Power2;Jt.Power3;Jt.Power4;Jt.Linear;Jt.Quad;Jt.Cubic;Jt.Quart;Jt.Quint;Jt.Strong;Jt.Elastic;Jt.Back;Jt.SteppedEase;Jt.Bounce;Jt.Sine;Jt.Expo;Jt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gc,ti,hr,Ho,Ti,kc,Vo,W0=function(){return typeof window<"u"},Wn={},yi=180/Math.PI,ur=Math.PI/180,er=Math.atan2,Hc=1e8,Wo=/([A-Z])/g,X0=/(left|right|width|margin|padding|x)/i,q0=/[\s,\(]\S/,An={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_o=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Y0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},j0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Z0=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},K0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},gu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},vu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},$0=function(t,e,n){return t.style[e]=n},J0=function(t,e,n){return t.style.setProperty(e,n)},Q0=function(t,e,n){return t._gsap[e]=n},tv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ev=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},nv=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ue="transform",Ze=ue+"Origin",iv=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Wn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=An[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=zn(i,a)}):this.tfm[t]=o.x?o[t]:zn(i,t),t===Ze&&(this.tfm.zOrigin=o.zOrigin);else return An.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(ue)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ze,e,"")),t=ue}(s||e)&&this.props.push(t,e,s[t])},xu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},rv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Wo,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Vo(),(!s||!s.isStart)&&!n[ue]&&(xu(n),i.zOrigin&&n[Ze]&&(n[Ze]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Mu=function(t,e){var n={target:t,props:[],revert:rv,save:iv};return t._gsap||Ke.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},yu,go=function(t,e){var n=ti.createElementNS?ti.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ti.createElement(t);return n&&n.style?n:ti.createElement(t)},sn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Wo,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Mr(e)||e,1)||""},Vc="O,Moz,ms,Ms,Webkit".split(","),Mr=function(t,e,n){var i=e||Ti,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Vc[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Vc[o]:"")+t},vo=function(){W0()&&window.document&&(Gc=window,ti=Gc.document,hr=ti.documentElement,Ti=go("div")||{style:{}},go("div"),ue=Mr(ue),Ze=ue+"Origin",Ti.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yu=!!Mr("perspective"),Vo=Ke.core.reverting,Ho=1)},Wc=function(t){var e=t.ownerSVGElement,n=go("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),hr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),hr.removeChild(n),s},Xc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Su=function(t){var e,n;try{e=t.getBBox()}catch{e=Wc(t),n=1}return e&&(e.width||e.height)||n||(e=Wc(t)),e&&!e.width&&!e.x&&!e.y?{x:+Xc(t,["x","cx","x1"])||0,y:+Xc(t,["y","cy","y1"])||0,width:0,height:0}:e},Eu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Su(t))},ci=function(t,e){if(e){var n=t.style,i;e in Wn&&e!==Ze&&(e=ue),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Wo,"-$1").toLowerCase())):n.removeAttribute(e)}},ei=function(t,e,n,i,s,o){var a=new je(t._pt,e,n,0,1,o?vu:gu);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},qc={deg:1,rad:1,turn:1},sv={grid:1,flex:1},hi=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ti.style,l=X0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,p=i==="px",d=i==="%",g,_,m,f;if(i===o||!s||qc[i]||qc[o])return s;if(o!=="px"&&!p&&(s=r(t,e,n,"px")),f=t.getCTM&&Eu(t),(d||o==="%")&&(Wn[e]||~e.indexOf("adius")))return g=f?t.getBBox()[l?"width":"height"]:t[h],ge(d?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(p?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ti||!_.appendChild)&&(_=ti.body),m=_._gsap,m&&d&&m.width&&l&&m.time===nn.time&&!m.uncache)return ge(s/m.width*u);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,g=t[h],M?t.style[e]=M:ci(t,e)}else(d||o==="%")&&!sv[sn(_,"display")]&&(a.position=sn(t,"position")),_===t&&(a.position="static"),_.appendChild(Ti),g=Ti[h],_.removeChild(Ti),a.position="absolute";return l&&d&&(m=Ri(_),m.time=nn.time,m.width=_[h]),ge(p?g*s/u:g&&s?u/g*s:0)},zn=function(t,e,n,i){var s;return Ho||vo(),e in An&&e!=="transform"&&(e=An[e],~e.indexOf(",")&&(e=e.split(",")[0])),Wn[e]&&e!=="transform"?(s=Zr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:js(sn(t,Ze))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ys[e]&&Ys[e](t,e,n)||sn(t,e)||kh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?hi(t,e,s,n)+n:s},av=function(t,e,n,i){if(!n||n==="none"){var s=Mr(e,t,1),o=s&&sn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=sn(t,"borderTopColor"))}var a=new je(this._pt,t.style,e,0,1,pu),l=0,c=0,h,u,p,d,g,_,m,f,M,v,S,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=sn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=sn(t,e)||i,_?t.style[e]=_:ci(t,e)),h=[n,i],au(h),n=h[0],i=h[1],p=n.match(sr)||[],A=i.match(sr)||[],A.length){for(;u=sr.exec(i);)m=u[0],M=i.substring(l,u.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=p[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=cr(d,m)+S),f=parseFloat(m),v=m.substr((f+"").length),l=sr.lastIndex-v.length,v||(v=v||an.units[e]||S,l===i.length&&(i+=v,a.e+=v)),S!==v&&(d=hi(t,e,_,v)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:f-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?vu:gu;return Oh.test(i)&&(a.e=0),this._pt=a,a},Yc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ov=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Yc[n]||n,e[1]=Yc[i]||i,e.join(" ")},lv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Wn[a]&&(l=1,a=a==="transformOrigin"?Ze:ue),ci(n,a);l&&(ci(n,ue),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Zr(n,1),o.uncache=1,xu(i)))}},Ys={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new je(t._pt,e,n,0,0,lv);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},jr=[1,0,0,1,0,0],Tu={},bu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},jc=function(t){var e=sn(t,ue);return bu(e)?jr:e.substr(7).match(Nh).map(ge)},Xo=function(t,e){var n=t._gsap||Ri(t),i=t.style,s=jc(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?jr:s):(s===jr&&!t.offsetParent&&t!==hr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,hr.appendChild(t)),s=jc(t),l?i.display=l:ci(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):hr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xo=function(t,e,n,i,s,o){var a=t._gsap,l=s||Xo(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,p=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],f=l[4],M=l[5],v=e.split(" "),S=parseFloat(v[0])||0,A=parseFloat(v[1])||0,C,E,U,x;n?l!==jr&&(E=d*m-g*_)&&(U=S*(m/E)+A*(-_/E)+(_*M-m*f)/E,x=S*(-g/E)+A*(d/E)-(d*M-g*f)/E,S=U,A=x):(C=Su(t),S=C.x+(~v[0].indexOf("%")?S/100*C.width:S),A=C.y+(~(v[1]||v[0]).indexOf("%")?A/100*C.height:A)),i||i!==!1&&a.smooth?(f=S-c,M=A-h,a.xOffset=u+(f*d+M*_)-f,a.yOffset=p+(f*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Ze]="0px 0px",o&&(ei(o,a,"xOrigin",c,S),ei(o,a,"yOrigin",h,A),ei(o,a,"xOffset",u,a.xOffset),ei(o,a,"yOffset",p,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+A)},Zr=function(t,e){var n=t._gsap||new lu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=sn(t,Ze)||"0",h,u,p,d,g,_,m,f,M,v,S,A,C,E,U,x,T,k,G,K,D,B,H,Z,$,Q,P,R,X,O,W,J;return h=u=p=_=m=f=M=v=S=0,d=g=1,n.svg=!!(t.getCTM&&Eu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ue]!=="none"?l[ue]:"")),i.scale=i.rotate=i.translate="none"),E=Xo(t,n.svg),n.svg&&(n.uncache?($=t.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),xo(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,C=n.yOrigin||0,E!==jr&&(k=E[0],G=E[1],K=E[2],D=E[3],h=B=E[4],u=H=E[5],E.length===6?(d=Math.sqrt(k*k+G*G),g=Math.sqrt(D*D+K*K),_=k||G?er(G,k)*yi:0,M=K||D?er(K,D)*yi+_:0,M&&(g*=Math.abs(Math.cos(M*ur))),n.svg&&(h-=A-(A*k+C*K),u-=C-(A*G+C*D))):(J=E[6],O=E[7],P=E[8],R=E[9],X=E[10],W=E[11],h=E[12],u=E[13],p=E[14],U=er(J,X),m=U*yi,U&&(x=Math.cos(-U),T=Math.sin(-U),Z=B*x+P*T,$=H*x+R*T,Q=J*x+X*T,P=B*-T+P*x,R=H*-T+R*x,X=J*-T+X*x,W=O*-T+W*x,B=Z,H=$,J=Q),U=er(-K,X),f=U*yi,U&&(x=Math.cos(-U),T=Math.sin(-U),Z=k*x-P*T,$=G*x-R*T,Q=K*x-X*T,W=D*T+W*x,k=Z,G=$,K=Q),U=er(G,k),_=U*yi,U&&(x=Math.cos(U),T=Math.sin(U),Z=k*x+G*T,$=B*x+H*T,G=G*x-k*T,H=H*x-B*T,k=Z,B=$),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),d=ge(Math.sqrt(k*k+G*G+K*K)),g=ge(Math.sqrt(H*H+J*J)),U=er(B,H),M=Math.abs(U)>2e-4?U*yi:0,S=W?1/(W<0?-W:W):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!bu(sn(t,ue)),Z&&t.setAttribute("transform",Z))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=p+o,n.scaleX=ge(d),n.scaleY=ge(g),n.rotation=ge(_)+a,n.rotationX=ge(m)+a,n.rotationY=ge(f)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ze]=js(c)),n.xOffset=n.yOffset=0,n.force3D=an.force3D,n.renderTransform=n.svg?hv:yu?wu:cv,n.uncache=0,n},js=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ka=function(t,e,n){var i=Oe(e);return ge(parseFloat(e)+parseFloat(hi(t,"x",n+"px",i)))+i},cv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,wu(t,e)},vi="0deg",Lr="0px",xi=") ",wu=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,p=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,f=n.force3D,M=n.target,v=n.zOrigin,S="",A=f==="auto"&&t&&t!==1||f===!0;if(v&&(u!==vi||h!==vi)){var C=parseFloat(h)*ur,E=Math.sin(C),U=Math.cos(C),x;C=parseFloat(u)*ur,x=Math.cos(C),o=Ka(M,o,E*x*-v),a=Ka(M,a,-Math.sin(C)*-v),l=Ka(M,l,U*x*-v+v)}m!==Lr&&(S+="perspective("+m+xi),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(A||o!==Lr||a!==Lr||l!==Lr)&&(S+=l!==Lr||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xi),c!==vi&&(S+="rotate("+c+xi),h!==vi&&(S+="rotateY("+h+xi),u!==vi&&(S+="rotateX("+u+xi),(p!==vi||d!==vi)&&(S+="skew("+p+", "+d+xi),(g!==1||_!==1)&&(S+="scale("+g+", "+_+xi),M.style[ue]=S||"translate(0, 0)"},hv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,p=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,f=n.yOffset,M=n.forceCSS,v=parseFloat(o),S=parseFloat(a),A,C,E,U,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ur,c*=ur,A=Math.cos(l)*u,C=Math.sin(l)*u,E=Math.sin(l-c)*-p,U=Math.cos(l-c)*p,c&&(h*=ur,x=Math.tan(c-h),x=Math.sqrt(1+x*x),E*=x,U*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),A*=x,C*=x)),A=ge(A),C=ge(C),E=ge(E),U=ge(U)):(A=u,U=p,C=E=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=hi(d,"x",o,"px"),S=hi(d,"y",a,"px")),(g||_||m||f)&&(v=ge(v+g-(g*A+_*E)+m),S=ge(S+_-(g*C+_*U)+f)),(i||s)&&(x=d.getBBox(),v=ge(v+i/100*x.width),S=ge(S+s/100*x.height)),x="matrix("+A+","+C+","+E+","+U+","+v+","+S+")",d.setAttribute("transform",x),M&&(d.style[ue]=x)},uv=function(t,e,n,i,s){var o=360,a=Ce(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?yi:1),c=l-i,h=i+c+"deg",u,p;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Hc)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Hc)%o-~~(c/o)*o)),t._pt=p=new je(t._pt,e,n,i,c,Y0),p.e=h,p.u="deg",t._props.push(n),p},Zc=function(t,e){for(var n in e)t[n]=e[n];return t},dv=function(t,e,n){var i=Zc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,p,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ue]=e,a=Zr(n,1),ci(n,ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ue],o[ue]=e,a=Zr(n,1),o[ue]=c);for(l in Wn)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=Oe(c),g=Oe(h),u=d!==g?hi(n,l,c,g):parseFloat(c),p=parseFloat(h),t._pt=new je(t._pt,a,l,u,p-u,_o),t._pt.u=g||0,t._props.push(l));Zc(a,i)};Ye("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Ys[t>1?"border"+r:r]=function(a,l,c,h,u){var p,d;if(arguments.length<4)return p=o.map(function(g){return zn(a,g,c)}),d=p.join(" "),d.split(p[0]).length===5?p[0]:d;p=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=p[_]=p[_]||p[(_-1)/2|0]}),a.init(l,d,u)}});var Au={name:"css",register:vo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,p,d,g,_,m,f,M,v,S,A,C,E,U,x;Ho||vo(),this.styles=this.styles||Mu(t),U=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(en[_]&&cu(_,e,n,i,t,s)))){if(d=typeof h,g=Ys[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Xr(h)),g)g(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ai.lastIndex=0,ai.test(c)||(m=Oe(c),f=Oe(h),f?m!==f&&(c=hi(t,_,c,f)+f):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),U.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ce(c)&&~c.indexOf("random(")&&(c=Xr(c)),Oe(c+"")||c==="auto"||(c+=an.units[_]||Oe(zn(t,_))||""),(c+"").charAt(1)==="="&&(c=zn(t,_))):c=zn(t,_),p=parseFloat(c),M=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),_ in An&&(_==="autoAlpha"&&(p===1&&zn(t,"visibility")==="hidden"&&u&&(p=0),U.push("visibility",0,a.visibility),ei(this,a,"visibility",p?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=An[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Wn,v){if(this.styles.save(_),x=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=sn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=t.style.perspective;t.style.perspective=h,h=sn(t,"perspective"),T?t.style.perspective=T:ci(t,"perspective")}u=parseFloat(h)}if(S||(A=t._gsap,A.renderTransform&&!e.parseTransform||Zr(t,e.parseTransform),C=e.smoothOrigin!==!1&&A.smooth,S=this._pt=new je(this._pt,a,ue,0,1,A.renderTransform,A,0,-1),S.dep=1),_==="scale")this._pt=new je(this._pt,A,"scaleY",A.scaleY,(M?cr(A.scaleY,M+u):u)-A.scaleY||0,_o),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){U.push(Ze,0,a[Ze]),h=ov(h),A.svg?xo(t,h,0,C,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==A.zOrigin&&ei(this,A,"zOrigin",A.zOrigin,f),ei(this,a,_,js(c),js(h)));continue}else if(_==="svgOrigin"){xo(t,h,1,C,0,this);continue}else if(_ in Tu){uv(this,A,_,p,M?cr(p,M+h):h);continue}else if(_==="smoothOrigin"){ei(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){dv(this,h,t);continue}}else _ in a||(_=Mr(_)||_);if(v||(u||u===0)&&(p||p===0)&&!q0.test(h)&&_ in a)m=(c+"").substr((p+"").length),u||(u=0),f=Oe(h)||(_ in an.units?an.units[_]:m),m!==f&&(p=hi(t,_,c,f)),this._pt=new je(this._pt,v?A:a,_,p,(M?cr(p,M+u):u)-p,!v&&(f==="px"||_==="zIndex")&&e.autoRound!==!1?K0:_o),this._pt.u=f||0,v&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=Z0):m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=j0);else if(_ in a)av.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Do(_,h);continue}v||(_ in a?U.push(_,0,a[_]):typeof t[_]=="function"?U.push(_,2,t[_]()):U.push(_,1,c||t[_])),o.push(_)}}E&&mu(this)},render:function(t,e){if(e.tween._time||!Vo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:zn,aliases:An,getSetter:function(t,e,n){var i=An[e];return i&&i.indexOf(",")<0&&(e=i),e in Wn&&e!==Ze&&(t._gsap.x||zn(t,"x"))?n&&kc===n?e==="scale"?tv:Q0:(kc=n||{})&&(e==="scale"?ev:nv):t.style&&!Co(t.style[e])?$0:~e.indexOf("-")?J0:Go(t,e)},core:{_removeProperty:ci,_getMatrix:Xo}};Ke.utils.checkPrefix=Mr;Ke.core.getStyleSaver=Mu;(function(r,t,e,n){var i=Ye(r+","+t+","+e,function(s){Wn[s]=1});Ye(t,function(s){an.units[s]="deg",Tu[s]=1}),An[i[13]]=r+","+t,Ye(n,function(s){var o=s.split(":");An[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ye("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){an.units[r]="px"});Ke.registerPlugin(Au);var ze=Ke.registerPlugin(Au)||Ke;ze.core.Tween;class fv{constructor(){this.textures={},this.materials={},this.generateProceduralTextures(),this.createMaterials()}generateProceduralTextures(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#111111",e.fillRect(0,0,256,256);const n=16;for(let f=0;f<256;f+=n)for(let M=0;M<256;M+=n){const v=(M/n+f/n)%2===0;e.fillStyle=v?"#242424":"#0c0c0c",e.fillRect(M,f,n,n),e.strokeStyle=v?"#363636":"#181818",e.lineWidth=1;for(let S=0;S<n;S+=4)e.beginPath(),v?(e.moveTo(M+S,f),e.lineTo(M+S,f+n)):(e.moveTo(M,f+S),e.lineTo(M+n,f+S)),e.stroke()}const i=new rr(t);i.wrapS=Bn,i.wrapT=Bn,i.repeat.set(24,24),this.textures.carbon=i;const s=document.createElement("canvas");s.width=512,s.height=256;const o=s.getContext("2d");o.fillStyle="#808080",o.fillRect(0,0,512,256),o.fillStyle="#000000",o.fillRect(0,50,512,14),o.fillRect(0,110,512,16),o.fillRect(0,170,512,14),o.strokeStyle="#222222",o.lineWidth=4;for(let f=0;f<512;f+=16)o.beginPath(),o.moveTo(f,0),o.lineTo(f+20,50),o.stroke(),o.beginPath(),o.moveTo(f,256),o.lineTo(f+20,184),o.stroke(),o.beginPath(),o.moveTo(f,64),o.lineTo(f+24,110),o.stroke(),o.beginPath(),o.moveTo(f,126),o.lineTo(f+24,170),o.stroke();const a=new rr(s);a.wrapS=Bn,a.wrapT=Bn,a.repeat.set(8,1),this.textures.tire=a;const l=document.createElement("canvas");l.width=512,l.height=512;const c=l.getContext("2d"),h=c.createRadialGradient(256,256,80,256,256,240);h.addColorStop(0,"#555555"),h.addColorStop(.5,"#777777"),h.addColorStop(1,"#444444"),c.fillStyle=h,c.fillRect(0,0,512,512),c.strokeStyle="rgba(255,255,255,0.08)",c.lineWidth=1;for(let f=90;f<240;f+=3)c.beginPath(),c.arc(256,256,f,0,Math.PI*2),c.stroke();c.fillStyle="#0a0a0a";const u=16;for(let f=0;f<u;f++){const M=f/u*Math.PI*2;for(let v=0;v<6;v++){const S=105+v*22,A=M+v*.12,C=256+Math.cos(A)*S,E=256+Math.sin(A)*S;c.beginPath(),c.arc(C,E,4,0,Math.PI*2),c.fill()}}const p=new rr(l);this.textures.brake=p;const d=document.createElement("canvas");d.width=256,d.height=256;const g=d.getContext("2d");g.fillStyle="#808080",g.fillRect(0,0,256,256);const _=g.getImageData(0,0,256,256);for(let f=0;f<_.data.length;f+=4){const M=120+Math.random()*40;_.data[f]=M,_.data[f+1]=M,_.data[f+2]=M,_.data[f+3]=255}g.putImageData(_,0,0);const m=new rr(d);m.wrapS=Bn,m.wrapT=Bn,m.repeat.set(16,16),this.textures.leather=m}createMaterials(){this.materials.bodyPaint=new bs({color:new yt("#ff334b"),metalness:.75,roughness:.18,clearcoat:1,clearcoatRoughness:.04,reflectivity:1,envMapIntensity:1.6,sheen:.3,sheenColor:new yt("#ffffff")}),this.materials.carbonFiber=new bs({color:new yt("#141414"),map:this.textures.carbon,bumpMap:this.textures.carbon,bumpScale:.015,metalness:.85,roughness:.25,clearcoat:.9,clearcoatRoughness:.08,envMapIntensity:1.3}),this.materials.matteCarbon=new se({color:new yt("#1c1c1c"),map:this.textures.carbon,roughness:.65,metalness:.3,envMapIntensity:.8}),this.materials.windshield=new bs({color:new yt("#152230"),transmission:.88,opacity:1,transparent:!0,roughness:.03,ior:1.52,reflectivity:.9,envMapIntensity:1.8}),this.materials.headlightGlass=new bs({color:new yt("#ffffff"),transmission:.94,transparent:!0,roughness:.04,ior:1.48,reflectivity:.95}),this.materials.headlightLED=new se({color:new yt("#ffffff"),emissive:new yt("#ffffff"),emissiveIntensity:0,roughness:.1}),this.materials.drlLED=new se({color:new yt("#aee8ff"),emissive:new yt("#aee8ff"),emissiveIntensity:3.5,roughness:.1}),this.materials.taillightLED=new se({color:new yt("#ff0022"),emissive:new yt("#ff0022"),emissiveIntensity:2.8,roughness:.2}),this.materials.turnSignalLED=new se({color:new yt("#ffaa00"),emissive:new yt("#ffaa00"),emissiveIntensity:0,roughness:.2}),this.materials.underglowLED=new se({color:new yt("#00e5ff"),emissive:new yt("#00e5ff"),emissiveIntensity:0,roughness:.1}),this.materials.rim=new se({color:new yt("#16171a"),metalness:.95,roughness:.15,envMapIntensity:1.5}),this.materials.tire=new se({color:new yt("#1c1c1e"),bumpMap:this.textures.tire,bumpScale:.04,roughness:.85,metalness:.08}),this.materials.brakeRotor=new se({color:new yt("#dcdcdc"),map:this.textures.brake,metalness:.9,roughness:.22,envMapIntensity:1.2}),this.materials.caliper=new se({color:new yt("#ff2233"),metalness:.4,roughness:.2,envMapIntensity:1.4}),this.materials.interiorLeather=new se({color:new yt("#15161a"),bumpMap:this.textures.leather,bumpScale:.02,roughness:.7,metalness:.1}),this.materials.interiorStitch=new se({color:new yt("#ff334b"),roughness:.5}),this.materials.interiorTrim=new se({color:new yt("#101010"),metalness:.9,roughness:.2}),this.materials.cockpitScreen=new Jr({color:new yt("#00e5ff")}),this.materials.titaniumExhaust=new se({color:new yt("#28303d"),metalness:.95,roughness:.25,envMapIntensity:1.5}),this.materials.engineBlock=new se({color:new yt("#2b2b2b"),metalness:.8,roughness:.4})}setPaint(t){if(!this.materials.bodyPaint)return;const e=new yt(t.color||"#ff334b");if(this.materials.bodyPaint.color.copy(e),t.type==="matte")this.materials.bodyPaint.metalness=.25,this.materials.bodyPaint.roughness=.65,this.materials.bodyPaint.clearcoat=.1,this.materials.bodyPaint.clearcoatRoughness=.8,this.materials.bodyPaint.iridescence=0;else if(t.type==="metallic")this.materials.bodyPaint.metalness=.88,this.materials.bodyPaint.roughness=.22,this.materials.bodyPaint.clearcoat=1,this.materials.bodyPaint.clearcoatRoughness=.04,this.materials.bodyPaint.iridescence=0;else if(t.type==="chameleon")this.materials.bodyPaint.metalness=.6,this.materials.bodyPaint.roughness=.18,this.materials.bodyPaint.clearcoat=1,this.materials.bodyPaint.clearcoatRoughness=.02,this.materials.bodyPaint.iridescence=.95,this.materials.bodyPaint.iridescenceIOR=1.6;else if(t.type==="carbon"){this.materials.bodyPaint.metalness=.8,this.materials.bodyPaint.roughness=.3,this.materials.bodyPaint.clearcoat=1,this.materials.bodyPaint.map=this.textures.carbon,this.materials.bodyPaint.bumpMap=this.textures.carbon,this.materials.bodyPaint.bumpScale=.012,this.materials.bodyPaint.needsUpdate=!0;return}else this.materials.bodyPaint.metalness=.35,this.materials.bodyPaint.roughness=.12,this.materials.bodyPaint.clearcoat=1,this.materials.bodyPaint.clearcoatRoughness=.03,this.materials.bodyPaint.iridescence=0,this.materials.bodyPaint.map=null,this.materials.bodyPaint.bumpMap=null;t.clearcoat!==void 0&&(this.materials.bodyPaint.clearcoat=t.clearcoat),t.metalness!==void 0&&(this.materials.bodyPaint.metalness=t.metalness),t.roughness!==void 0&&(this.materials.bodyPaint.roughness=t.roughness),this.materials.bodyPaint.needsUpdate=!0}setRimFinish(t){const e={obsidian:{color:"#141416",metalness:.95,roughness:.12},titanium:{color:"#7a8089",metalness:.92,roughness:.28},gold:{color:"#d4af37",metalness:.88,roughness:.22},chrome:{color:"#f0f0f0",metalness:1,roughness:.05},bronze:{color:"#8c6239",metalness:.85,roughness:.35}},n=e[t]||e.obsidian;this.materials.rim.color.set(n.color),this.materials.rim.metalness=n.metalness,this.materials.rim.roughness=n.roughness,this.materials.rim.needsUpdate=!0}setCaliperColor(t){this.materials.caliper.color.set(t),this.materials.caliper.needsUpdate=!0}setInteriorLeather(t,e=!1){this.materials.interiorLeather.color.set(t),e?(this.materials.interiorLeather.roughness=.9,this.materials.interiorLeather.metalness=.02):(this.materials.interiorLeather.roughness=.65,this.materials.interiorLeather.metalness=.12),this.materials.interiorLeather.needsUpdate=!0}setWindowTint(t){const e={clear:{color:"#2a3b4c",transmission:.92,opacity:1},smoke:{color:"#101720",transmission:.7,opacity:1},limo:{color:"#05070a",transmission:.35,opacity:1},chameleon:{color:"#d4af37",transmission:.78,opacity:1,iridescence:.9}},n=e[t]||e.clear;this.materials.windshield.color.set(n.color),this.materials.windshield.transmission=n.transmission,n.iridescence?this.materials.windshield.iridescence=n.iridescence:this.materials.windshield.iridescence=0,this.materials.windshield.needsUpdate=!0}setHeadlights(t){t==="off"?(this.materials.headlightLED.emissiveIntensity=0,this.materials.drlLED.emissiveIntensity=.2):t==="drl"?(this.materials.headlightLED.emissiveIntensity=0,this.materials.drlLED.emissiveIntensity=3.5):t==="high"&&(this.materials.headlightLED.emissiveIntensity=6,this.materials.drlLED.emissiveIntensity=4.5),this.materials.headlightLED.needsUpdate=!0,this.materials.drlLED.needsUpdate=!0}setUnderglow(t,e="#00e5ff"){this.materials.underglowLED.color.set(e),this.materials.underglowLED.emissive.set(e),this.materials.underglowLED.emissiveIntensity=t?5:0,this.materials.underglowLED.needsUpdate=!0}}const Se=new fv;class pv{constructor(){this.ctx=null,this.isMuted=!1,this.isRevving=!1,this.currentRPM=950,this.targetRPM=950,this.idleRPM=950,this.maxRPM=8600,this.currentProfile="toyota",this.masterGain=null,this.engineGain=null,this.osc1=null,this.osc2=null,this.oscSub=null,this.turboOsc=null,this.turboGain=null,this.filter=null,this.distortion=null,this.engineStarted=!1,this.updateLoop=this.updateLoop.bind(this),requestAnimationFrame(this.updateLoop)}init(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.setupEngineNodes()}catch(t){console.warn("Web Audio API not supported:",t)}}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setupEngineNodes(){this.ctx&&(this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.7,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(0,this.ctx.currentTime),this.filter=this.ctx.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.setValueAtTime(450,this.ctx.currentTime),this.filter.Q.setValueAtTime(3.5,this.ctx.currentTime),this.distortion=this.ctx.createWaveShaper(),this.distortion.curve=this.makeDistortionCurve(16),this.distortion.oversample="4x",this.osc1=this.ctx.createOscillator(),this.osc1.type="sawtooth",this.osc1.frequency.setValueAtTime(36,this.ctx.currentTime),this.osc2=this.ctx.createOscillator(),this.osc2.type="triangle",this.osc2.frequency.setValueAtTime(72,this.ctx.currentTime),this.oscSub=this.ctx.createOscillator(),this.oscSub.type="sine",this.oscSub.frequency.setValueAtTime(18,this.ctx.currentTime),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.setValueAtTime(1100,this.ctx.currentTime),this.turboGain=this.ctx.createGain(),this.turboGain.gain.setValueAtTime(0,this.ctx.currentTime),this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.masterGain),this.osc1.connect(this.distortion),this.osc2.connect(this.distortion),this.oscSub.connect(this.filter),this.distortion.connect(this.filter),this.filter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.osc1.start(),this.osc2.start(),this.oscSub.start(),this.turboOsc.start())}makeDistortionCurve(t){const e=typeof t=="number"?t:20,n=44100,i=new Float32Array(n),s=Math.PI/180;for(let o=0;o<n;++o){const a=o*2/n-1;i[o]=(3+e)*a*20*s/(Math.PI+e*Math.abs(a))}return i}setVehicleProfile(t){this.currentProfile=t,t==="rolls_royce"?(this.idleRPM=600,this.maxRPM=5500):t==="mg"?(this.idleRPM=0,this.maxRPM=14e3):t==="maruti"?(this.idleRPM=850,this.maxRPM=6800):t==="toyota"||t==="mahindra"?(this.idleRPM=750,this.maxRPM=5200):(this.idleRPM=950,this.maxRPM=8600),this.targetRPM=this.idleRPM}startEngine(){this.init(),this.resume(),!(!this.ctx||this.isMuted)&&(this.engineStarted=!0,this.playStarterSound(),setTimeout(()=>{this.engineGain&&this.ctx&&(this.engineGain.gain.cancelScheduledValues(this.ctx.currentTime),this.engineGain.gain.linearRampToValueAtTime(.4,this.ctx.currentTime+.6))},450))}playStarterSound(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(320,t+.35),n.gain.setValueAtTime(.5,t),n.gain.exponentialRampToValueAtTime(.01,t+.45),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.45)}setRevving(t){this.init(),this.resume(),this.isRevving=t,this.engineStarted||this.startEngine(),this.targetRPM=t?this.maxRPM:this.idleRPM,!t&&this.currentRPM>4200&&this.currentProfile!=="mg"&&this.currentProfile!=="rolls_royce"&&this.playExhaustPop()}playExhaustPop(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.sampleRate*.07,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let l=0;l<e;l++)i[l]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=n;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(650,t);const a=this.ctx.createGain();a.gain.setValueAtTime(.55,t),a.gain.exponentialRampToValueAtTime(.01,t+.07),s.connect(o),o.connect(a),a.connect(this.masterGain),s.start(t),s.stop(t+.08)}updateLoop(){if(this.ctx&&this.engineStarted&&!this.isMuted){const t=this.isRevving?.09:.05;this.currentRPM+=(this.targetRPM-this.currentRPM)*t;const e=(this.currentRPM-this.idleRPM)/(this.maxRPM-this.idleRPM||1),n=this.ctx.currentTime;if(this.currentProfile==="mg")this.osc1.type="sine",this.osc1.frequency.setValueAtTime(200+e*1800,n),this.filter.frequency.setValueAtTime(1200+e*3500,n),this.turboGain.gain.setValueAtTime(e*.3,n),this.turboOsc.frequency.setValueAtTime(800+e*2600,n);else{const i=26+e*140;this.osc1.frequency.setValueAtTime(i,n),this.osc2.frequency.setValueAtTime(i*2,n),this.filter.frequency.setValueAtTime(250+e*2400,n),this.turboGain.gain.setValueAtTime(e*.16,n),this.turboOsc.frequency.setValueAtTime(900+e*4200,n)}}requestAnimationFrame(this.updateLoop)}getRPMData(){return{rpm:Math.round(this.currentRPM),normalized:Math.max(0,Math.min(1,(this.currentRPM-this.idleRPM)/(this.maxRPM-this.idleRPM||1))),boost:(this.currentRPM/(this.maxRPM||1)*2.1).toFixed(1)}}playDoorSound(t){if(this.init(),this.resume(),!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(t?750:420,e),n.frequency.exponentialRampToValueAtTime(110,e+.06),i.gain.setValueAtTime(.4,e),i.gain.exponentialRampToValueAtTime(.01,e+.07),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.08)}playHeadlightClick(){if(this.init(),this.resume(),!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1400,t),e.frequency.exponentialRampToValueAtTime(500,t+.04),n.gain.setValueAtTime(.3,t),n.gain.exponentialRampToValueAtTime(.01,t+.05),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.06)}playLockChirp(){if(this.init(),this.resume(),!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;for(let e=0;e<2;e++){const n=t+e*.09,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(2400,n),i.frequency.linearRampToValueAtTime(2900,n+.04),s.gain.setValueAtTime(.28,n),s.gain.exponentialRampToValueAtTime(.01,n+.05),i.connect(s),s.connect(this.masterGain),i.start(n),i.stop(n+.06)}}playServoSound(){if(this.init(),this.resume(),!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(420,t),e.frequency.linearRampToValueAtTime(580,t+.35),n.gain.setValueAtTime(.1,t),n.gain.exponentialRampToValueAtTime(.01,t+.4),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.42)}playClick(){if(this.init(),this.resume(),!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(750,t),e.frequency.exponentialRampToValueAtTime(180,t+.03),n.gain.setValueAtTime(.2,t),n.gain.exponentialRampToValueAtTime(.01,t+.03),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.04)}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.7,this.ctx.currentTime),this.isMuted}}const te=new pv;class mv{constructor(t){this.scene=t,this.root=new $t,this.root.name="ApexGarageRoot",this.currentBrand="toyota",this.vehicleGroups={},this.doorsOpen=!1,this.hoodOpen=!1,this.tailgateOpen=!1,this.suspensionRaised=!1,this.spoilerTrackMode=!1,this.headlightsOn=!1,this.underglowOn=!1,this.hazardFlashing=!1,this.hazardInterval=null,this.animatedNodes={toyota:{},rolls_royce:{},maruti:{},mg:{},mahindra:{},lamborghini:{}},this.headlightSpotlights=[],this.volumetricCones=[],this.buildAllVehicles(),this.scene.add(this.root),this.switchVehicle("toyota")}buildAllVehicles(){this.vehicleGroups.toyota=this.buildToyotaFortuner(),this.vehicleGroups.rolls_royce=this.buildRollsRoyceSpectre(),this.vehicleGroups.maruti=this.buildMarutiSwift(),this.vehicleGroups.mg=this.buildMGCyberster(),this.vehicleGroups.mahindra=this.buildMahindraThar(),this.vehicleGroups.lamborghini=this.buildApexHypercar(),Object.keys(this.vehicleGroups).forEach(t=>{this.root.add(this.vehicleGroups[t]),this.vehicleGroups[t].visible=!1})}buildToyotaFortuner(){const t=new $t;t.name="ToyotaFortuner";const e=Se.materials,n=this.animatedNodes.toyota,i=new $t;n.bodyRoot=i,t.add(i);const s=new wt(2.05,.55,4.65),o=new dt(s,e.bodyPaint);o.position.set(0,.72,0),o.castShadow=!0,o.receiveShadow=!0,i.add(o);const a=new wt(1.68,.12,1.45),l=new dt(a,e.bodyPaint);l.position.set(0,1.06,-1.35),l.rotation.x=-.06,l.castShadow=!0,n.hood=l,i.add(l);const c=new $t;c.position.set(0,.72,-1.35);const h=new dt(new wt(.85,.35,.9),e.engineBlock),u=new dt(new wt(.65,.08,.4),e.titaniumExhaust);u.position.set(0,.22,0),c.add(h),c.add(u),i.add(c);const p=new wt(1.82,.72,2.7),d=new dt(p,e.bodyPaint);d.position.set(0,1.32,.45),d.castShadow=!0,i.add(d);const g=new dt(new wt(1.72,.65,.06),e.windshield);g.position.set(0,1.38,-.85),g.rotation.x=.52,i.add(g);const _=new dt(new wt(.04,.48,2.2),e.windshield);_.position.set(-.92,1.34,.5),i.add(_);const m=new dt(new wt(.04,.48,2.2),e.windshield);m.position.set(.92,1.34,.5),i.add(m);const f=new dt(new wt(1.58,.52,.15),new se({color:657932,roughness:.15,metalness:.85}));f.position.set(0,.78,-2.32),i.add(f);const M=new dt(new Nr(.09,.02,16,24),new se({color:16777215,metalness:.95,roughness:.05}));M.position.set(0,.92,-2.41),i.add(M);for(let x of[-1,1]){const T=new dt(new wt(.42,.16,.22),e.headlightGlass);T.position.set(x*.76,.96,-2.22),i.add(T);const k=new dt(new wt(.38,.025,.08),e.drlLED);k.position.set(x*.76,1.03,-2.31),i.add(k);const G=new Cr(16777215,0,35,Math.PI/6,.45,1.2);G.position.set(x*.76,.96,-2.35),G.target.position.set(x*.5,0,-14),i.add(G),i.add(G.target),this.headlightSpotlights.push(G)}for(let x of[-1,1]){const T=new dt(new wt(.12,.36,.95),e.matteCarbon);T.position.set(x*1.04,.58,-1.45),i.add(T);const k=new dt(new wt(.12,.36,.95),e.matteCarbon);k.position.set(x*1.04,.58,1.45),i.add(k);const G=new dt(new wt(.2,.04,2.3),e.matteCarbon);G.position.set(x*1.08,.38,.05),i.add(G);const K=new dt(new wt(.04,.05,2.6),e.titaniumExhaust);K.position.set(x*.78,1.72,.4),i.add(K)}const v=new dt(new wt(1.82,.06,.45),e.bodyPaint);v.position.set(0,1.68,1.85),i.add(v);const S=new dt(new wt(1.88,.08,.08),e.taillightLED);S.position.set(0,.98,2.34),i.add(S);const A=new $t;A.position.set(-1.02,.72,-.6);const C=new dt(new wt(.08,.65,1.15),e.bodyPaint);C.position.set(0,.2,.55),A.add(C),n.doorL=A,i.add(A);const E=new $t;E.position.set(1.02,.72,-.6);const U=new dt(new wt(.08,.65,1.15),e.bodyPaint);return U.position.set(0,.2,.55),E.add(U),n.doorR=E,i.add(E),this.addDetailedWheels(t,{frontZ:-1.45,rearZ:1.45,x:.98,y:.48,radius:.48,width:.32}),t}buildRollsRoyceSpectre(){const t=new $t;t.name="RollsRoyceSpectre";const e=Se.materials,n=this.animatedNodes.rolls_royce,i=new $t;n.bodyRoot=i,t.add(i);const s=new dt(new wt(2.08,.52,5.2),e.bodyPaint);s.position.set(0,.58,0),s.castShadow=!0,s.receiveShadow=!0,i.add(s);const o=new dt(new wt(1.78,.1,1.95),e.bodyPaint);o.position.set(0,.88,-1.55),o.rotation.x=-.04,n.hood=o,i.add(o);const a=new dt(new wt(1.1,.4,1.2),e.engineBlock);a.position.set(0,.6,-1.55),i.add(a);const l=new dt(new wt(1.35,.74,.18),new se({color:16777215,metalness:1,roughness:.02,envMapIntensity:2.2}));l.position.set(0,.74,-2.55),i.add(l);for(let m=-.55;m<=.55;m+=.075){const f=new dt(new wt(.012,.68,.03),new Jr({color:16777215}));f.position.set(m,.74,-2.65),i.add(f)}const c=new dt(new ks(.045,.14,16),new se({color:16777215,metalness:1,roughness:.01}));c.position.set(0,1.16,-2.48),i.add(c);for(let m of[-1,1]){const f=new dt(new wt(.42,.08,.12),e.headlightGlass);f.position.set(m*.84,.94,-2.5),i.add(f);const M=new dt(new wt(.4,.02,.05),e.drlLED);M.position.set(m*.84,.97,-2.56),i.add(M);const v=new Cr(16777215,0,40,Math.PI/6,.4,1.1);v.position.set(m*.84,.94,-2.6),v.target.position.set(m*.5,0,-15),i.add(v),i.add(v.target),this.headlightSpotlights.push(v)}const h=new dt(new wt(1.86,.58,2.9),e.bodyPaint);h.position.set(0,1.14,.55),h.castShadow=!0,i.add(h);const u=new dt(new wt(1.78,.58,.06),e.windshield);u.position.set(0,1.18,-.85),u.rotation.x=.42,i.add(u);const p=new $t;p.position.set(-1.05,.58,1.55);const d=new dt(new wt(.08,.65,1.6),e.bodyPaint);d.position.set(0,.22,-.8),p.add(d),n.coachDoorL=p,i.add(p);const g=new $t;g.position.set(1.05,.58,1.55);const _=new dt(new wt(.08,.65,1.6),e.bodyPaint);return _.position.set(0,.22,-.8),g.add(_),n.coachDoorR=g,i.add(g),this.addDetailedWheels(t,{frontZ:-1.65,rearZ:1.65,x:.98,y:.44,radius:.44,width:.28}),t}buildMarutiSwift(){const t=new $t;t.name="MarutiSwift";const e=Se.materials,n=this.animatedNodes.maruti,i=new $t;n.bodyRoot=i,t.add(i);const s=new dt(new wt(1.76,.48,3.85),e.bodyPaint);s.position.set(0,.46,0),s.castShadow=!0,i.add(s);const o=new dt(new wt(1.45,.08,1.15),e.bodyPaint);o.position.set(0,.68,-1.2),o.rotation.x=-.12,n.hood=o,i.add(o);const a=new dt(new wt(1.18,.42,.12),e.matteCarbon);a.position.set(0,.52,-1.86),i.add(a);const l=new dt(new wt(.14,.14,.04),new se({color:16777215,metalness:.95,roughness:.08}));l.position.set(0,.62,-1.94),l.rotation.z=.35,i.add(l);for(let g of[-1,1]){const _=new dt(new wt(.34,.16,.22),e.headlightGlass);_.position.set(g*.64,.72,-1.78),i.add(_);const m=new dt(new Nr(.06,.015,12,16),e.drlLED);m.position.set(g*.64,.72,-1.88),i.add(m);const f=new Cr(16777215,0,30,Math.PI/6,.4,1.1);f.position.set(g*.64,.72,-1.9),f.target.position.set(g*.4,0,-12),i.add(f),i.add(f.target),this.headlightSpotlights.push(f)}const c=new dt(new wt(1.48,.04,1.85),new se({color:526862,roughness:.18,metalness:.8}));c.position.set(0,1.18,.15),i.add(c);for(let g of[-1,1]){const _=new dt(new tn(.05,.05,.15,16),e.titaniumExhaust);_.rotateX(Math.PI/2),_.position.set(g*.48,.28,1.94),i.add(_)}const h=new $t;h.position.set(-.88,.46,-.45);const u=new dt(new wt(.06,.58,1.05),e.bodyPaint);u.position.set(0,.18,.52),h.add(u),n.doorL=h,i.add(h);const p=new $t;p.position.set(.88,.46,-.45);const d=new dt(new wt(.06,.58,1.05),e.bodyPaint);return d.position.set(0,.18,.52),p.add(d),n.doorR=p,i.add(p),this.addDetailedWheels(t,{frontZ:-1.2,rearZ:1.2,x:.85,y:.34,radius:.34,width:.22}),t}buildMGCyberster(){const t=new $t;t.name="MGCyberster";const e=Se.materials,n=this.animatedNodes.mg,i=new $t;n.bodyRoot=i,t.add(i);const s=new dt(new tn(.88,.98,4.3,16,4),e.bodyPaint);s.rotateX(Math.PI/2),s.scale.set(1,.38,1),s.position.set(0,.46,0),s.castShadow=!0,i.add(s);const o=new dt(new tn(.1,.1,.02,8),new se({color:58879,emissive:58879,emissiveIntensity:2.5}));o.rotateX(Math.PI/2),o.position.set(0,.48,-2.16),i.add(o);const a=new $t;a.position.set(-.88,.48,-.45);const l=new dt(new wt(.12,.44,1.25),e.bodyPaint);l.position.set(0,.06,.62),a.add(l),n.scissorDoorL=a,i.add(a);const c=new $t;c.position.set(.88,.48,-.45);const h=new dt(new wt(.12,.44,1.25),e.bodyPaint);h.position.set(0,.06,.62),c.add(h),n.scissorDoorR=c,i.add(c);for(let u of[-1,1]){const p=new dt(new ks(.12,.28,3),e.taillightLED);p.rotateZ(u*Math.PI/2),p.position.set(u*.72,.62,2.14),i.add(p)}return this.addDetailedWheels(t,{frontZ:-1.35,rearZ:1.35,x:.92,y:.35,radius:.38,width:.26}),t}buildMahindraThar(){const t=new $t;t.name="MahindraThar";const e=Se.materials,n=this.animatedNodes.mahindra,i=new $t;n.bodyRoot=i,t.add(i);const s=new dt(new wt(1.85,.98,3.75),e.bodyPaint);s.position.set(0,1.02,0),s.castShadow=!0,i.add(s);const o=new dt(new wt(1.42,.54,.12),e.matteCarbon);o.position.set(0,.92,-1.91),i.add(o);for(let p of[-1,1]){const d=new dt(new tn(.13,.13,.08,16),e.headlightGlass);d.rotateX(Math.PI/2),d.position.set(p*.56,.96,-1.92),i.add(d);const g=new dt(new Nr(.13,.02,12,24),e.drlLED);g.position.set(p*.56,.96,-1.96),i.add(g);const _=new Cr(16777215,0,35,Math.PI/6,.4,1.2);_.position.set(p*.56,.96,-1.98),_.target.position.set(p*.4,0,-14),i.add(_),i.add(_.target),this.headlightSpotlights.push(_)}for(let p of[-1,1]){const d=new dt(new wt(.24,.38,.85),e.matteCarbon);d.position.set(p*1.02,.74,-1.25),i.add(d);const g=new dt(new wt(.24,.38,.85),e.matteCarbon);g.position.set(p*1.02,.74,1.25),i.add(g)}const a=new dt(new tn(.46,.46,.28,24),e.tire);a.rotateZ(Math.PI/2),a.position.set(0,.96,2.02),i.add(a);const l=new $t;l.position.set(-.95,.72,-.4);const c=new dt(new wt(.08,.75,1.15),e.bodyPaint);c.position.set(0,.22,.56),l.add(c),n.doorL=l,i.add(l);const h=new $t;h.position.set(.95,.72,-.4);const u=new dt(new wt(.08,.75,1.15),e.bodyPaint);return u.position.set(0,.22,.56),h.add(u),n.doorR=h,i.add(h),this.addDetailedWheels(t,{frontZ:-1.25,rearZ:1.25,x:.98,y:.52,radius:.48,width:.32}),t}buildApexHypercar(){const t=new $t;t.name="ApexHypercar";const e=Se.materials,n=this.animatedNodes.lamborghini,i=new $t;n.bodyRoot=i,t.add(i);const s=new tn(.85,1.02,3.8,16,8);s.rotateX(Math.PI/2),s.scale(1,.42,1);const o=new dt(s,e.bodyPaint);o.position.set(0,.46,0),o.castShadow=!0,i.add(o);const a=new dt(new wt(1.96,.04,.6),e.matteCarbon);a.position.set(0,.14,-2.1),i.add(a);const l=new $t;l.position.set(-.88,.52,-.55);const c=new dt(new wt(.14,.48,1.3),e.bodyPaint);c.position.set(0,.05,.65),l.add(c),n.scissorDoorL=l,i.add(l);const h=new $t;h.position.set(.88,.52,-.55);const u=new dt(new wt(.14,.48,1.3),e.bodyPaint);u.position.set(0,.05,.65),h.add(u),n.scissorDoorR=h,i.add(h);const p=new $t;p.position.set(0,.78,1.85);const d=new dt(new wt(1.96,.04,.38),e.carbonFiber);d.position.set(0,.28,-.05),p.add(d),n.spoilerGroup=p,i.add(p);for(let g=-1.5;g<=1.5;g+=1){const _=new dt(new tn(.065,.065,.22,16),e.titaniumExhaust);_.rotateX(Math.PI/2),_.position.set(g*.12,.54,2.22),i.add(_)}for(let g of[-1,1]){const _=new Cr(16777215,0,30,Math.PI/6,.5,1.2);_.position.set(g*.68,.48,-2.05),_.target.position.set(g*.5,-.4,-12),i.add(_),i.add(_.target),this.headlightSpotlights.push(_)}return this.addDetailedWheels(t,{frontZ:-1.35,rearZ:1.35,x:.92,y:.36,radius:.37,width:.3}),t}addDetailedWheels(t,e){const n=Se.materials;[{x:-e.x,y:e.y,z:e.frontZ,isLeft:!0},{x:e.x,y:e.y,z:e.frontZ,isLeft:!1},{x:-e.x,y:e.y,z:e.rearZ,isLeft:!0},{x:e.x,y:e.y,z:e.rearZ,isLeft:!1}].forEach(s=>{const o=new $t;o.position.set(s.x,s.y,s.z);const a=new tn(e.radius,e.radius,e.width,32);a.rotateZ(Math.PI/2);const l=new dt(a,n.tire);l.castShadow=!0,o.add(l);const c=new tn(e.radius*.72,e.radius*.72,.03,24);c.rotateZ(Math.PI/2);const h=new dt(c,n.brakeRotor);h.position.set(s.isLeft?.02:-.02,0,0),o.add(h);const u=new wt(.08,.16,.14),p=new dt(u,n.caliper);p.position.set(s.isLeft?.05:-.05,e.radius*.42,.1),o.add(p);const d=new dt(new tn(e.radius*.78,e.radius*.78,e.width*.9,24,1,!0),n.rim);d.rotateZ(Math.PI/2),o.add(d);for(let g=0;g<6;g++){const _=g/6*Math.PI*2,m=new dt(new wt(e.width*.7,e.radius*.7,.025),n.rim);m.position.set(s.isLeft?-e.width*.22:e.width*.22,Math.sin(_)*(e.radius*.48),Math.cos(_)*(e.radius*.48)),m.rotation.x=_,o.add(m)}t.add(o)})}switchVehicle(t){this.vehicleGroups[t]&&(this.currentBrand=t,te.playLockChirp(),Object.keys(this.vehicleGroups).forEach(e=>{this.vehicleGroups[e].visible=e===t}),te.setVehicleProfile(t))}toggleDoors(){this.doorsOpen=!this.doorsOpen,te.playDoorSound(this.doorsOpen);const t=this.currentBrand,e=this.animatedNodes[t];if(t==="rolls_royce"){if(e.coachDoorL&&e.coachDoorR){const n=this.doorsOpen?1.2:0;ze.to(e.coachDoorL.rotation,{y:-n,duration:1.2,ease:"power3.inOut"}),ze.to(e.coachDoorR.rotation,{y:n,duration:1.2,ease:"power3.inOut"})}}else if(t==="lamborghini"||t==="mg"){if(e.scissorDoorL&&e.scissorDoorR){const n=this.doorsOpen?-.85:0,i=this.doorsOpen?.35:0;ze.to(e.scissorDoorL.rotation,{z:n,y:i,duration:1.1,ease:"power3.inOut"}),ze.to(e.scissorDoorR.rotation,{z:-n,y:-i,duration:1.1,ease:"power3.inOut"})}}else if(e.doorL&&e.doorR){const n=this.doorsOpen?1.05:0;ze.to(e.doorL.rotation,{y:n,duration:1,ease:"power3.inOut"}),ze.to(e.doorR.rotation,{y:-n,duration:1,ease:"power3.inOut"})}return this.doorsOpen}toggleHood(){this.hoodOpen=!this.hoodOpen,te.playDoorSound(this.hoodOpen);const t=this.animatedNodes[this.currentBrand];if(t.hood){const e=this.hoodOpen?.75:0;ze.to(t.hood.rotation,{x:e,duration:1.1,ease:"power3.inOut"})}return this.hoodOpen}toggleSuspension(){this.suspensionRaised=!this.suspensionRaised,te.playServoSound();const t=this.animatedNodes[this.currentBrand];if(t.bodyRoot){const e=this.suspensionRaised?.18:0;ze.to(t.bodyRoot.position,{y:e,duration:.9,ease:"power2.inOut"})}return this.suspensionRaised}toggleSpoiler(){this.spoilerTrackMode=!this.spoilerTrackMode,te.playServoSound();const t=this.animatedNodes.lamborghini;if(t.spoilerGroup){const e=this.spoilerTrackMode?.98:.78,n=this.spoilerTrackMode?.28:0;ze.to(t.spoilerGroup.position,{y:e,duration:.9,ease:"power2.out"}),ze.to(t.spoilerGroup.rotation,{x:n,duration:.9,ease:"power2.out"})}return this.spoilerTrackMode}toggleHeadlights(){return this.headlightsOn=!this.headlightsOn,te.playHeadlightClick(),Se.setHeadlights(this.headlightsOn?"high":"off"),this.headlightSpotlights.forEach(t=>{ze.to(t,{intensity:this.headlightsOn?18:0,duration:.3})}),this.headlightsOn}toggleHazardLights(){if(this.hazardFlashing=!this.hazardFlashing,te.playClick(),this.hazardFlashing){let t=!1;this.hazardInterval=setInterval(()=>{t=!t,Se.materials.turnSignalLED.emissiveIntensity=t?5:0,Se.materials.turnSignalLED.needsUpdate=!0},450)}else this.hazardInterval&&clearInterval(this.hazardInterval),Se.materials.turnSignalLED.emissiveIntensity=0,Se.materials.turnSignalLED.needsUpdate=!0;return this.hazardFlashing}}class _v{constructor(t){this.container=t,this.width=t.clientWidth,this.height=t.clientHeight,this.scene=null,this.camera=null,this.renderer=null,this.controls=null,this.car=null,this.envType="studio",this.studioLights=[],this.cyberLights=[],this.sunsetLights=[],this.floor=null,this.grid=null,this.autoRotate=!1,this.turntableSpeed=1,this.isCinematicShowcase=!1,this.cinematicTime=0,this.init(),this.setupEnvironments(),this.setupCar(),this.setupResize(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}init(){this.scene=new zg,this.scene.background=new yt(461070),this.scene.fog=new wo(461070,.04),this.camera=new He(38,this.width/this.height,.1,100),this.camera.position.set(4.5,1.6,4.8),this.renderer=new Ph({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Qc,this.renderer.toneMappingExposure=1.2,this.renderer.outputColorSpace=Re,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$c,this.container.appendChild(this.renderer.domElement),this.controls=new Yg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2-.03,this.controls.minDistance=2.2,this.controls.maxDistance=16,this.controls.target.set(0,.55,0),this.createShowroomFloor()}createShowroomFloor(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createRadialGradient(256,256,40,256,256,256);n.addColorStop(0,"#151a24"),n.addColorStop(.55,"#0a0d14"),n.addColorStop(1,"#05070a"),e.fillStyle=n,e.fillRect(0,0,512,512);const i=new rr(t),s=new kr(35,35),o=new se({color:526863,map:i,roughness:.16,metalness:.88,envMapIntensity:1.2});this.floor=new dt(s,o),this.floor.rotateX(-Math.PI/2),this.floor.receiveShadow=!0,this.scene.add(this.floor),this.grid=new Xg(26,26,16724811,1976120),this.grid.position.y=.005,this.scene.add(this.grid);const a=document.createElement("canvas");a.width=512,a.height=512;const l=a.getContext("2d"),c=l.createRadialGradient(256,256,50,256,256,240);c.addColorStop(0,"rgba(0,0,0,0.95)"),c.addColorStop(.6,"rgba(0,0,0,0.65)"),c.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=c,l.fillRect(0,0,512,512);const h=new rr(a),u=new dt(new kr(3.6,5.6),new Jr({map:h,transparent:!0,opacity:.88,depthWrite:!1}));u.rotateX(-Math.PI/2),u.position.set(0,.01,0),this.scene.add(u)}setupEnvironments(){const t=new $t;t.add(new ka(16777215,.85));const e=new ws(16777215,3.5);e.position.set(4,9,5),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,t.add(e);const n=new ws(16777215,2.4);n.position.set(-7,3.5,-4),t.add(n);const i=new ws(16777215,2);i.position.set(7,3,-3),t.add(i),this.studioLights.push(t),this.scene.add(t);const s=new $t;s.visible=!1,s.add(new ka(790564,1.3));const o=new Ac(58879,14,20);o.position.set(-4.5,3.5,2),s.add(o);const a=new Ac(16711799,12,20);a.position.set(4.5,3.5,-2),s.add(a),this.cyberLights.push(s),this.scene.add(s);const l=new $t;l.visible=!1,l.add(new ka(2890032,1.1));const c=new ws(16755251,5);c.position.set(8,2.8,6),c.castShadow=!0,l.add(c),this.sunsetLights.push(l),this.scene.add(l)}setEnvironment(t){this.envType=t,this.studioLights.forEach(e=>e.visible=t==="studio"),this.cyberLights.forEach(e=>e.visible=t==="cyberpunk"),this.sunsetLights.forEach(e=>e.visible=t==="sunset"),t==="studio"?(this.scene.background.set(461070),this.grid.material.color.set(16724811),this.renderer.toneMappingExposure=1.2):t==="cyberpunk"?(this.scene.background.set(263693),this.grid.material.color.set(58879),this.renderer.toneMappingExposure=1.4):(this.scene.background.set(1707805),this.grid.material.color.set(16755251),this.renderer.toneMappingExposure=1.3)}setupCar(){this.car=new mv(this.scene)}setCameraView(t){this.isCinematicShowcase=!1;const e={hero:{pos:[4.5,1.5,4.6],target:[0,.55,0],fov:38},side:{pos:[5.6,1.2,0],target:[0,.55,0],fov:36},front:{pos:[0,1.1,-5.2],target:[0,.52,0],fov:36},cockpit:{pos:[-.36,.88,.2],target:[-.36,.65,-.6],fov:55},wheel:{pos:[2.1,.45,-1.2],target:[.95,.45,-1.4],fov:30},rear:{pos:[-3.4,1.5,4.8],target:[0,.65,1.8],fov:36},top:{pos:[.05,8.5,.05],target:[0,0,0],fov:34}},n=e[t]||e.hero;ze.to(this.camera.position,{x:n.pos[0],y:n.pos[1],z:n.pos[2],duration:1.3,ease:"power3.inOut"}),ze.to(this.controls.target,{x:n.target[0],y:n.target[1],z:n.target[2],duration:1.3,ease:"power3.inOut",onUpdate:()=>this.camera.lookAt(this.controls.target)}),ze.to(this.camera,{fov:n.fov,duration:1.3,ease:"power3.inOut",onUpdate:()=>this.camera.updateProjectionMatrix()})}toggleCinematicShowcase(){return this.isCinematicShowcase=!this.isCinematicShowcase,this.isCinematicShowcase&&(this.autoRotate=!1,this.controls.autoRotate=!1),this.isCinematicShowcase}toggleAutoRotate(){return this.autoRotate=!this.autoRotate,this.controls.autoRotate=this.autoRotate,this.controls.autoRotateSpeed=this.turntableSpeed*1.5,this.autoRotate}setTurntableSpeed(t){this.turntableSpeed=t,this.controls.autoRotateSpeed=t*1.5}captureScreenshot(t="16:9"){const e=this.grid.visible;this.grid.visible=!1,this.renderer.render(this.scene,this.camera);const n=this.renderer.domElement.toDataURL("image/png");return this.grid.visible=e,n}setupResize(){window.addEventListener("resize",()=>{this.width=this.container.clientWidth,this.height=this.container.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))})}animate(){if(requestAnimationFrame(this.animate),this.isCinematicShowcase){this.cinematicTime+=.008;const t=5.2+Math.sin(this.cinematicTime*.5)*1.2,e=1.4+Math.cos(this.cinematicTime*.7)*.6;this.camera.position.x=Math.sin(this.cinematicTime)*t,this.camera.position.z=Math.cos(this.cinematicTime)*t,this.camera.position.y=e,this.camera.lookAt(0,.55,0)}else this.controls.update();this.renderer.render(this.scene,this.camera)}}var qo={};(function r(t,e,n,i){var s=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!t.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),R=P.getContext("2d");R.fillRect(0,0,1,1);var X=P.transferToImageBitmap();R.createPattern(X,"no-repeat")}catch{return!1}return!0}();function l(){}function c(P){var R=e.exports.Promise,X=R!==void 0?R:t.Promise;return typeof X=="function"?new X(P):(P(l,l),null)}var h=function(P,R){return{transform:function(X){if(P)return X;if(R.has(X))return R.get(X);var O=new OffscreenCanvas(X.width,X.height),W=O.getContext("2d");return W.drawImage(X,0,0),R.set(X,O),O},clear:function(){R.clear()}}}(a,new Map),u=function(){var P=Math.floor(16.666666666666668),R,X,O={},W=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(R=function(J){var at=Math.random();return O[at]=requestAnimationFrame(function tt(ht){W===ht||W+P-1<ht?(W=ht,delete O[at],J()):O[at]=requestAnimationFrame(tt)}),at},X=function(J){O[J]&&cancelAnimationFrame(O[J])}):(R=function(J){return setTimeout(J,P)},X=function(J){return clearTimeout(J)}),{frame:R,cancel:X}}(),p=function(){var P,R,X={};function O(W){function J(at,tt){W.postMessage({options:at||{},callback:tt})}W.init=function(tt){var ht=tt.transferControlToOffscreen();W.postMessage({canvas:ht},[ht])},W.fire=function(tt,ht,gt){if(R)return J(tt,null),R;var mt=Math.random().toString(36).slice(2);return R=c(function(Et){function F(Zt){Zt.data.callback===mt&&(delete X[mt],W.removeEventListener("message",F),R=null,h.clear(),gt(),Et())}W.addEventListener("message",F),J(tt,mt),X[mt]=F.bind(null,{data:{callback:mt}})}),R},W.reset=function(){W.postMessage({reset:!0});for(var tt in X)X[tt](),delete X[tt]}}return function(){if(P)return P;if(!n&&s){var W=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([W])))}catch(J){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",J),null}O(P)}return P}}(),d={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(P,R){return R?R(P):P}function _(P){return P!=null}function m(P,R,X){return g(P&&_(P[R])?P[R]:d[R],X)}function f(P){return P<0?0:Math.floor(P)}function M(P,R){return Math.floor(Math.random()*(R-P))+P}function v(P){return parseInt(P,16)}function S(P){return P.map(A)}function A(P){var R=String(P).replace(/[^0-9a-f]/gi,"");return R.length<6&&(R=R[0]+R[0]+R[1]+R[1]+R[2]+R[2]),{r:v(R.substring(0,2)),g:v(R.substring(2,4)),b:v(R.substring(4,6))}}function C(P){var R=m(P,"origin",Object);return R.x=m(R,"x",Number),R.y=m(R,"y",Number),R}function E(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function U(P){var R=P.getBoundingClientRect();P.width=R.width,P.height=R.height}function x(P){var R=document.createElement("canvas");return R.style.position="fixed",R.style.top="0px",R.style.left="0px",R.style.pointerEvents="none",R.style.zIndex=P,R}function T(P,R,X,O,W,J,at,tt,ht){P.save(),P.translate(R,X),P.rotate(J),P.scale(O,W),P.arc(0,0,1,at,tt,ht),P.restore()}function k(P){var R=P.angle*(Math.PI/180),X=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-R+(.5*X-Math.random()*X),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function G(P,R){R.x+=Math.cos(R.angle2D)*R.velocity+R.drift,R.y+=Math.sin(R.angle2D)*R.velocity+R.gravity,R.velocity*=R.decay,R.flat?(R.wobble=0,R.wobbleX=R.x+10*R.scalar,R.wobbleY=R.y+10*R.scalar,R.tiltSin=0,R.tiltCos=0,R.random=1):(R.wobble+=R.wobbleSpeed,R.wobbleX=R.x+10*R.scalar*Math.cos(R.wobble),R.wobbleY=R.y+10*R.scalar*Math.sin(R.wobble),R.tiltAngle+=.1,R.tiltSin=Math.sin(R.tiltAngle),R.tiltCos=Math.cos(R.tiltAngle),R.random=Math.random()+2);var X=R.tick++/R.totalTicks,O=R.x+R.random*R.tiltCos,W=R.y+R.random*R.tiltSin,J=R.wobbleX+R.random*R.tiltCos,at=R.wobbleY+R.random*R.tiltSin;if(P.fillStyle="rgba("+R.color.r+", "+R.color.g+", "+R.color.b+", "+(1-X)+")",P.beginPath(),o&&R.shape.type==="path"&&typeof R.shape.path=="string"&&Array.isArray(R.shape.matrix))P.fill(Z(R.shape.path,R.shape.matrix,R.x,R.y,Math.abs(J-O)*.1,Math.abs(at-W)*.1,Math.PI/10*R.wobble));else if(R.shape.type==="bitmap"){var tt=Math.PI/10*R.wobble,ht=Math.abs(J-O)*.1,gt=Math.abs(at-W)*.1,mt=R.shape.bitmap.width*R.scalar,Et=R.shape.bitmap.height*R.scalar,F=new DOMMatrix([Math.cos(tt)*ht,Math.sin(tt)*ht,-Math.sin(tt)*gt,Math.cos(tt)*gt,R.x,R.y]);F.multiplySelf(new DOMMatrix(R.shape.matrix));var Zt=P.createPattern(h.transform(R.shape.bitmap),"no-repeat");Zt.setTransform(F),P.globalAlpha=1-X,P.fillStyle=Zt,P.fillRect(R.x-mt/2,R.y-Et/2,mt,Et),P.globalAlpha=1}else if(R.shape==="circle")P.ellipse?P.ellipse(R.x,R.y,Math.abs(J-O)*R.ovalScalar,Math.abs(at-W)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI):T(P,R.x,R.y,Math.abs(J-O)*R.ovalScalar,Math.abs(at-W)*R.ovalScalar,Math.PI/10*R.wobble,0,2*Math.PI);else if(R.shape==="star")for(var lt=Math.PI/2*3,Tt=4*R.scalar,_t=8*R.scalar,qt=R.x,Dt=R.y,w=5,y=Math.PI/w;w--;)qt=R.x+Math.cos(lt)*_t,Dt=R.y+Math.sin(lt)*_t,P.lineTo(qt,Dt),lt+=y,qt=R.x+Math.cos(lt)*Tt,Dt=R.y+Math.sin(lt)*Tt,P.lineTo(qt,Dt),lt+=y;else P.moveTo(Math.floor(R.x),Math.floor(R.y)),P.lineTo(Math.floor(R.wobbleX),Math.floor(W)),P.lineTo(Math.floor(J),Math.floor(at)),P.lineTo(Math.floor(O),Math.floor(R.wobbleY));return P.closePath(),P.fill(),R.tick<R.totalTicks}function K(P,R,X,O,W){var J=R.slice(),at=P.getContext("2d"),tt,ht,gt=c(function(mt){function Et(){tt=ht=null,at.clearRect(0,0,O.width,O.height),h.clear(),W(),mt()}function F(){n&&!(O.width===i.width&&O.height===i.height)&&(O.width=P.width=i.width,O.height=P.height=i.height),!O.width&&!O.height&&(X(P),O.width=P.width,O.height=P.height),at.clearRect(0,0,O.width,O.height),J=J.filter(function(Zt){return G(at,Zt)}),J.length?tt=u.frame(F):Et()}tt=u.frame(F),ht=Et});return{addFettis:function(mt){return J=J.concat(mt),gt},canvas:P,promise:gt,reset:function(){tt&&u.cancel(tt),ht&&ht()}}}function D(P,R){var X=!P,O=!!m(R||{},"resize"),W=!1,J=m(R,"disableForReducedMotion",Boolean),at=s&&!!m(R||{},"useWorker"),tt=at?p():null,ht=X?E:U,gt=P&&tt?!!P.__confetti_initialized:!1,mt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Et;function F(lt,Tt,_t){for(var qt=m(lt,"particleCount",f),Dt=m(lt,"angle",Number),w=m(lt,"spread",Number),y=m(lt,"startVelocity",Number),V=m(lt,"decay",Number),st=m(lt,"gravity",Number),nt=m(lt,"drift",Number),it=m(lt,"colors",S),bt=m(lt,"ticks",Number),ft=m(lt,"shapes"),Mt=m(lt,"scalar"),Pt=!!m(lt,"flat"),Bt=C(lt),et=qt,Kt=[],Gt=P.width*Bt.x,Nt=P.height*Bt.y;et--;)Kt.push(k({x:Gt,y:Nt,angle:Dt,spread:w,startVelocity:y,color:it[et%it.length],shape:ft[M(0,ft.length)],ticks:bt,decay:V,gravity:st,drift:nt,scalar:Mt,flat:Pt}));return Et?Et.addFettis(Kt):(Et=K(P,Kt,ht,Tt,_t),Et.promise)}function Zt(lt){var Tt=J||m(lt,"disableForReducedMotion",Boolean),_t=m(lt,"zIndex",Number);if(Tt&&mt)return c(function(y){y()});X&&Et?P=Et.canvas:X&&!P&&(P=x(_t),document.body.appendChild(P)),O&&!gt&&ht(P);var qt={width:P.width,height:P.height};tt&&!gt&&tt.init(P),gt=!0,tt&&(P.__confetti_initialized=!0);function Dt(){if(tt){var y={getBoundingClientRect:function(){if(!X)return P.getBoundingClientRect()}};ht(y),tt.postMessage({resize:{width:y.width,height:y.height}});return}qt.width=qt.height=null}function w(){Et=null,O&&(W=!1,t.removeEventListener("resize",Dt)),X&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,gt=!1)}return O&&!W&&(W=!0,t.addEventListener("resize",Dt,!1)),tt?tt.fire(lt,qt,w):F(lt,qt,w)}return Zt.reset=function(){tt&&tt.reset(),Et&&Et.reset()},Zt}var B;function H(){return B||(B=D(null,{useWorker:!0,resize:!0})),B}function Z(P,R,X,O,W,J,at){var tt=new Path2D(P),ht=new Path2D;ht.addPath(tt,new DOMMatrix(R));var gt=new Path2D;return gt.addPath(ht,new DOMMatrix([Math.cos(at)*W,Math.sin(at)*W,-Math.sin(at)*J,Math.cos(at)*J,X,O])),gt}function $(P){if(!o)throw new Error("path confetti are not supported in this browser");var R,X;typeof P=="string"?R=P:(R=P.path,X=P.matrix);var O=new Path2D(R),W=document.createElement("canvas"),J=W.getContext("2d");if(!X){for(var at=1e3,tt=at,ht=at,gt=0,mt=0,Et,F,Zt=0;Zt<at;Zt+=2)for(var lt=0;lt<at;lt+=2)J.isPointInPath(O,Zt,lt,"nonzero")&&(tt=Math.min(tt,Zt),ht=Math.min(ht,lt),gt=Math.max(gt,Zt),mt=Math.max(mt,lt));Et=gt-tt,F=mt-ht;var Tt=10,_t=Math.min(Tt/Et,Tt/F);X=[_t,0,0,_t,-Math.round(Et/2+tt)*_t,-Math.round(F/2+ht)*_t]}return{type:"path",path:R,matrix:X}}function Q(P){var R,X=1,O="#000000",W='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?R=P:(R=P.text,X="scalar"in P?P.scalar:X,W="fontFamily"in P?P.fontFamily:W,O="color"in P?P.color:O);var J=10*X,at=""+J+"px "+W,tt=new OffscreenCanvas(J,J),ht=tt.getContext("2d");ht.font=at;var gt=ht.measureText(R),mt=Math.ceil(gt.actualBoundingBoxRight+gt.actualBoundingBoxLeft),Et=Math.ceil(gt.actualBoundingBoxAscent+gt.actualBoundingBoxDescent),F=2,Zt=gt.actualBoundingBoxLeft+F,lt=gt.actualBoundingBoxAscent+F;mt+=F+F,Et+=F+F,tt=new OffscreenCanvas(mt,Et),ht=tt.getContext("2d"),ht.font=at,ht.fillStyle=O,ht.fillText(R,Zt,lt);var Tt=1/X;return{type:"bitmap",bitmap:tt.transferToImageBitmap(),matrix:[Tt,0,0,Tt,-mt*Tt/2,-Et*Tt/2]}}e.exports=function(){return H().apply(this,arguments)},e.exports.reset=function(){H().reset()},e.exports.create=D,e.exports.shapeFromPath=$,e.exports.shapeFromText=Q})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),qo,!1);const gv=qo.exports;qo.exports.create;class vv{constructor(t){this.sceneManager=t,this.car=t.car,this.currency="INR",this.vehicles={toyota:{brand:"TOYOTA",model:"Fortuner Legender 4x4 SUV",country:"🇯🇵 Japan / India",basePriceINR:485e4,basePriceUSD:58e3,defaultColor:"#f8fafc",paintCategory:"metallic"},rolls_royce:{brand:"ROLLS-ROYCE",model:"Spectre Bespoke Grand Saloon",country:"🇬🇧 Great Britain",basePriceINR:95e6,basePriceUSD:115e4,defaultColor:"#111418",paintCategory:"gloss"},maruti:{brand:"MARUTI SUZUKI",model:"Swift Sport Boosterjet",country:"🇮🇳 India / Japan",basePriceINR:98e4,basePriceUSD:11800,defaultColor:"#ff334b",paintCategory:"metallic"},mg:{brand:"MG (MORRIS GARAGES)",model:"Cyberster Electric Roadster",country:"🇬🇧 Morris Garages",basePriceINR:65e5,basePriceUSD:78e3,defaultColor:"#ffd000",paintCategory:"chameleon"},mahindra:{brand:"MAHINDRA",model:"Thar 4x4 Rugged Trail",country:"🇮🇳 India",basePriceINR:185e4,basePriceUSD:22200,defaultColor:"#1b4332",paintCategory:"matte"},lamborghini:{brand:"LAMBORGHINI",model:"Apex GT Hypercar",country:"🇮🇹 Italy",basePriceINR:418e5,basePriceUSD:5e5,defaultColor:"#ff5722",paintCategory:"metallic"}},this.currentVehicleKey="toyota",this.config={paint:{category:"metallic",color:"#f8fafc",name:"Platinum White Pearl",priceINR:45e3,priceUSD:550,clearcoat:1,metalness:.85,roughness:.2},wheels:{style:"aero",styleName:"Diamond-Cut Sport Alloy",finish:"obsidian",priceINR:65e3,priceUSD:800},calipers:{color:"#ff2233",name:"Sport Red Calipers",priceINR:15e3,priceUSD:180},interior:{leather:"#15161a",name:"Obsidian Nappa Leather",isAlcantara:!1,priceINR:45e3,priceUSD:550},glass:{tint:"clear",name:"Ultra-Clear Crystal",priceINR:0,priceUSD:0},lighting:{headlights:!1,underglow:!1,underglowColor:"#00e5ff",priceINR:25e3,priceUSD:300}},this.activeTab="garage",this.initDOM(),this.bindEvents(),this.updatePrice(),this.startTachometerLoop()}initDOM(){this.dom={priceBadge:document.getElementById("price-val-badge"),brandTitle:document.getElementById("brand-title-text"),brandModel:document.getElementById("brand-model-text"),currencyBtn:document.getElementById("currency-toggle-btn"),tabBtns:document.querySelectorAll(".tab-btn"),tabPanes:document.querySelectorAll(".tab-pane"),camBtns:document.querySelectorAll(".cam-btn"),pedalBtn:document.getElementById("pedal-rev-btn"),rpmVal:document.getElementById("tacho-rpm-val"),rpmBar:document.getElementById("rpm-fill-bar"),boostVal:document.getElementById("tacho-boost-val"),soundToggle:document.getElementById("sound-toggle-btn"),photoModal:document.getElementById("photo-modal"),summaryModal:document.getElementById("summary-modal"),photoPreview:document.getElementById("photo-preview-img"),toastContainer:document.getElementById("toast-container")}}bindEvents(){document.querySelectorAll(".vehicle-card").forEach(d=>{d.addEventListener("click",()=>{te.playClick(),document.querySelectorAll(".vehicle-card").forEach(_=>_.classList.remove("active")),d.classList.add("active");const g=d.dataset.vehicle;this.selectVehicle(g)})}),this.dom.currencyBtn&&this.dom.currencyBtn.addEventListener("click",()=>{te.playClick(),this.currency=this.currency==="INR"?"USD":"INR",this.dom.currencyBtn.textContent=this.currency==="INR"?"₹ INR":"$ USD",this.updatePrice(),this.showToast(`Currency set to ${this.currency}`)}),this.dom.tabBtns.forEach(d=>{d.addEventListener("click",()=>{te.playClick(),this.switchTab(d.dataset.tab)})}),this.dom.camBtns.forEach(d=>{d.addEventListener("click",()=>{te.playClick(),this.dom.camBtns.forEach(_=>_.classList.remove("active")),d.classList.add("active");const g=d.dataset.view;if(g==="showcase"){const _=this.sceneManager.toggleCinematicShowcase();d.classList.toggle("active",_),this.showToast(_?"Cinematic Drone Showcase Active":"Showcase Paused")}else this.sceneManager.setCameraView(g)})});const t=document.getElementById("quick-doors-btn");t&&t.addEventListener("click",()=>{const d=this.car.toggleDoors();t.classList.toggle("active",d),this.showToast(d?"Doors Opened":"Doors Closed")});const e=document.getElementById("quick-hood-btn");e&&e.addEventListener("click",()=>{const d=this.car.toggleHood();e.classList.toggle("active",d),this.showToast(d?"Engine Bay Hood Opened":"Engine Hood Closed")});const n=document.getElementById("quick-suspension-btn");n&&n.addEventListener("click",()=>{const d=this.car.toggleSuspension();n.classList.toggle("active",d),this.showToast(d?"Off-Road Air Suspension Raised (+180mm)":"Track Slammed Ride Height")});const i=document.getElementById("quick-hazard-btn");i&&i.addEventListener("click",()=>{const d=this.car.toggleHazardLights();i.classList.toggle("active",d),this.showToast(d?"Hazard Flashers Active":"Hazards Off")});const s=document.getElementById("quick-lights-btn");s&&s.addEventListener("click",()=>{const d=this.car.toggleHeadlights();s.classList.toggle("active",d),this.showToast(d?"Projector Headlights Activated":"Headlights Off")});const o=document.getElementById("quick-rotate-btn");if(o&&o.addEventListener("click",()=>{const d=this.sceneManager.toggleAutoRotate();o.classList.toggle("active",d),this.showToast(d?"Turntable Enabled":"Turntable Paused")}),this.dom.soundToggle&&this.dom.soundToggle.addEventListener("click",()=>{const d=te.toggleMute();this.dom.soundToggle.classList.toggle("active",!d),this.showToast(d?"Audio Muted":"Engine Audio On")}),this.dom.pedalBtn){const d=_=>{_.preventDefault(),this.dom.pedalBtn.classList.add("revving"),te.setRevving(!0)},g=_=>{_.preventDefault(),this.dom.pedalBtn.classList.remove("revving"),te.setRevving(!1)};this.dom.pedalBtn.addEventListener("mousedown",d),window.addEventListener("mouseup",g),this.dom.pedalBtn.addEventListener("touchstart",d),window.addEventListener("touchend",g)}document.querySelectorAll(".paint-swatch").forEach(d=>{d.addEventListener("click",()=>{te.playClick(),document.querySelectorAll(".paint-swatch").forEach(f=>f.classList.remove("active")),d.classList.add("active");const g=d.dataset.color,_=d.dataset.name;this.config.paint.color=g,this.config.paint.name=_,Se.setPaint({color:g,type:this.config.paint.category,clearcoat:this.config.paint.clearcoat,metalness:this.config.paint.metalness,roughness:this.config.paint.roughness});const m=document.getElementById("custom-paint-hex");m&&(m.value=g),this.updatePrice(),this.showToast(`Paint: ${_}`)})});const a=document.getElementById("custom-paint-hex"),l=document.getElementById("custom-paint-picker");if(a&&l){const d=g=>{this.config.paint.color=g,this.config.paint.name="Bespoke Custom Blend",Se.setPaint({color:g,type:this.config.paint.category,clearcoat:this.config.paint.clearcoat,metalness:this.config.paint.metalness,roughness:this.config.paint.roughness})};l.addEventListener("input",g=>{a.value=g.target.value,d(g.target.value)}),a.addEventListener("change",g=>{l.value=g.target.value,d(g.target.value)})}document.querySelectorAll(".finish-segment-btn").forEach(d=>{d.addEventListener("click",()=>{te.playClick(),document.querySelectorAll(".finish-segment-btn").forEach(_=>_.classList.remove("active")),d.classList.add("active");const g=d.dataset.finish;this.config.paint.category=g,Se.setPaint({color:this.config.paint.color,type:g,clearcoat:this.config.paint.clearcoat,metalness:this.config.paint.metalness,roughness:this.config.paint.roughness})})}),document.querySelectorAll(".rim-finish-swatch").forEach(d=>{d.addEventListener("click",()=>{te.playClick(),document.querySelectorAll(".rim-finish-swatch").forEach(g=>g.classList.remove("active")),d.classList.add("active"),Se.setRimFinish(d.dataset.finish)})}),document.querySelectorAll(".caliper-swatch").forEach(d=>{d.addEventListener("click",()=>{te.playClick(),document.querySelectorAll(".caliper-swatch").forEach(g=>g.classList.remove("active")),d.classList.add("active"),Se.setCaliperColor(d.dataset.color)})}),document.querySelectorAll(".leather-swatch").forEach(d=>{d.addEventListener("click",()=>{te.playClick(),document.querySelectorAll(".leather-swatch").forEach(g=>g.classList.remove("active")),d.classList.add("active"),Se.setInteriorLeather(d.dataset.color,d.dataset.alcantara==="true")})});const c=document.getElementById("open-photo-studio-btn");c&&c.addEventListener("click",()=>{te.playClick();const d=this.sceneManager.captureScreenshot("16:9");this.dom.photoPreview&&(this.dom.photoPreview.src=d),this.dom.photoModal&&this.dom.photoModal.classList.add("open")});const h=document.getElementById("capture-now-btn");h&&h.addEventListener("click",()=>{te.playClick();const d=this.sceneManager.captureScreenshot("16:9"),g=document.createElement("a");g.download=`${this.vehicles[this.currentVehicleKey].brand}-Custom-${Date.now()}.png`,g.href=d,g.click(),this.showToast("📸 4K Studio Snapshot Downloaded")});const u=document.getElementById("open-summary-btn");u&&u.addEventListener("click",()=>{te.playClick(),this.updatePrice(),this.dom.summaryModal&&this.dom.summaryModal.classList.add("open")});const p=document.getElementById("place-order-btn");p&&p.addEventListener("click",()=>{te.playLockChirp(),gv({particleCount:120,spread:80,origin:{y:.6}}),this.showToast(`🎉 ${this.vehicles[this.currentVehicleKey].brand} Build Reserved for S. RITISH!`)}),document.querySelectorAll(".modal-close-btn, .modal-overlay").forEach(d=>{d.addEventListener("click",g=>{(g.target===d||d.classList.contains("modal-close-btn"))&&(te.playClick(),document.querySelectorAll(".modal-overlay").forEach(_=>_.classList.remove("open")))})})}selectVehicle(t){if(!this.vehicles[t])return;this.currentVehicleKey=t;const e=this.vehicles[t];this.car.switchVehicle(t),this.dom.brandTitle&&(this.dom.brandTitle.innerHTML=`${e.brand} <span class="brand-tag">S. RITISH</span>`),this.dom.brandModel&&(this.dom.brandModel.textContent=`${e.model.toUpperCase()} // ${e.country}`),this.config.paint.color=e.defaultColor,this.config.paint.category=e.paintCategory,Se.setPaint({color:e.defaultColor,type:e.paintCategory}),this.updatePrice(),this.showToast(`Switched to ${e.brand} - ${e.model}`)}switchTab(t){this.activeTab=t,this.dom.tabBtns.forEach(e=>e.classList.toggle("active",e.dataset.tab===t)),this.dom.tabPanes.forEach(e=>{e.style.display=e.id===`tab-${t}`?"flex":"none"})}formatCurrency(t,e){return this.currency==="INR"?t>=1e7?`₹ ${(t/1e7).toFixed(2)} Cr`:`₹ ${(t/1e5).toFixed(2)} Lakh`:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(e)}updatePrice(){const t=this.vehicles[this.currentVehicleKey],e=t.basePriceINR+this.config.paint.priceINR+this.config.wheels.priceINR+this.config.calipers.priceINR+this.config.interior.priceINR+this.config.lighting.priceINR,n=t.basePriceUSD+this.config.paint.priceUSD+this.config.wheels.priceUSD+this.config.calipers.priceUSD+this.config.interior.priceUSD+this.config.lighting.priceUSD,i=this.formatCurrency(e,n);this.dom.priceBadge&&(this.dom.priceBadge.textContent=i);const s=document.getElementById("summary-table-body");s&&(s.innerHTML=`
        <tr><td>Lead Designer & Commissioner</td><td><strong>S. RITISH</strong></td></tr>
        <tr><td>Brand & Model</td><td><strong>${t.brand} - ${t.model}</strong></td></tr>
        <tr><td>Base Showroom Price</td><td>${this.formatCurrency(t.basePriceINR,t.basePriceUSD)}</td></tr>
        <tr><td>Bespoke Exterior Paint</td><td>+${this.formatCurrency(this.config.paint.priceINR,this.config.paint.priceUSD)}</td></tr>
        <tr><td>Alloy Wheels & Calipers</td><td>+${this.formatCurrency(this.config.wheels.priceINR+this.config.calipers.priceINR,this.config.wheels.priceUSD+this.config.calipers.priceUSD)}</td></tr>
        <tr><td>Luxury Interior Package</td><td>+${this.formatCurrency(this.config.interior.priceINR,this.config.interior.priceUSD)}</td></tr>
        <tr class="total-row"><td>Total On-Road Value</td><td>${i}</td></tr>
      `)}startTachometerLoop(){const t=()=>{const e=te.getRPMData();this.dom.rpmVal&&(this.dom.rpmVal.textContent=e.rpm.toLocaleString()),this.dom.rpmBar&&(this.dom.rpmBar.style.width=`${Math.max(10,e.normalized*100)}%`),this.dom.boostVal&&(this.dom.boostVal.textContent=`+${e.boost} bar`),requestAnimationFrame(t)};requestAnimationFrame(t)}showToast(t){if(!this.dom.toastContainer)return;const e=document.createElement("div");e.className="toast-item",e.innerHTML=`<span>⚡</span><span>${t}</span>`,this.dom.toastContainer.appendChild(e),setTimeout(()=>{e.style.opacity="0",e.style.transform="translateY(-10px)",e.style.transition="all 0.3s ease",setTimeout(()=>e.remove(),300)},2400)}}document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("canvas-container");if(!r)return;const t=new _v(r);new vv(t);const e=()=>{te.init(),te.resume(),window.removeEventListener("click",e),window.removeEventListener("keydown",e),window.removeEventListener("touchstart",e)};window.addEventListener("click",e),window.addEventListener("keydown",e),window.addEventListener("touchstart",e),console.log("%c APEX GT // Hypercar Configurator 3D Active ","background: #ff334b; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px;")});
