"use strict";(self.webpackChunkgolf=self.webpackChunkgolf||[]).push([[457],{7457:(k,C,r)=>{r.r(C),r.d(C,{OurLocationModule:()=>Z});var h=r(6814),M=r(3840),t=r(8926),_=r(3),l=r(6223),f=r(3999);const v=["searchBox"];function P(a,p){if(1&a&&(t.TgZ(0,"option",17),t._uU(1),t.qZA()),2&a){const e=p.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function y(a,p){if(1&a&&(t.TgZ(0,"option",17),t._uU(1),t.qZA()),2&a){const e=p.$implicit;t.Q6J("value",e.lat+","+e.lng),t.xp6(1),t.Oqu(e.name)}}function x(a,p){1&a&&(t.TgZ(0,"div",18),t._UZ(1,"div",19),t.qZA())}const O=[{elementType:"geometry",stylers:[{color:"#e8eaed"}]},{elementType:"labels.text.fill",stylers:[{color:"#000000"}]},{elementType:"labels.text.stroke",stylers:[{color:"#e8eaed"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#e8eaed"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#e8eaed"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#e8eaed"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#e8eaed"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#dcdcdc"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#000000"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#blue"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#000000"}]}],w=[{path:"",redirectTo:"location",pathMatch:"full"},{path:"location",component:(()=>{class a{constructor(e){this.serv=e,this.locations=[],this.area=[],this.locationsArea=[],this.isLoading=!1,this.selectedLocationId=null,this.selectedAreaId=null,this.center={lat:26.8206,lng:30.8025},this.zoom=4,this.options={styles:O},this.markers=[]}ngOnInit(){this.loadAreas(),this.getAllLocations()}ngAfterViewInit(){const e=document.getElementById("search-box"),n=new google.maps.places.SearchBox(e);this.map=new google.maps.Map(document.getElementById("map"),{center:this.center,zoom:this.zoom,styles:O}),this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(e),n.addListener("places_changed",()=>{const o=n.getPlaces();if(0===o?.length)return;const s=new google.maps.LatLngBounds;o?.forEach(i=>{if(!i.geometry||!i.geometry.location)return void console.log("Returned place contains no geometry");const u={lat:i.geometry.location.lat(),lng:i.geometry.location.lng()};this.createCustomMarker(u.lat,u.lng,"Search Result",""),i.geometry.viewport?s.union(i.geometry.viewport):s.extend(i.geometry.location)}),this.map.fitBounds(s)}),this.infoWindow=new google.maps.InfoWindow}getAllLocations(){this.isLoading=!0,this.serv.getLocationsAll().subscribe({next:e=>{this.locations=e.Locations.data,this.isLoading=!1,this.addMarkers()}})}addMarkers(){this.locations.forEach(e=>{const n={lat:parseFloat(e.lat),lng:parseFloat(e.lng)};this.createCustomMarker(n.lat,n.lng,e.name,e.image)})}loadAreas(){this.serv.getAreas().subscribe(e=>{this.area=e.sliders.data})}loadLocations(){this.serv.getLocations(this.selectedAreaId).subscribe(e=>{this.locationsArea=e.Locations.data,this.clearMarkers(),this.locationsArea.forEach(n=>{const o={lat:parseFloat(n.lat),lng:parseFloat(n.lng)};this.createCustomMarker(o.lat,o.lng,n.name,n.image)})})}clearMarkers(){this.markers.forEach(e=>e.setMap(null)),this.markers=[],document.querySelectorAll(".custom-marker").forEach(e=>e.remove())}onAreaChange(){this.loadLocations()}onLocationChange(){if(this.selectedLocationId){const e=this.locationsArea.find(n=>n.id===this.selectedLocationId);if(e){const n={lat:parseFloat(e.lat),lng:parseFloat(e.lng)};this.map.setCenter(n),this.map.setZoom(14),this.clearMarkers(),this.createCustomMarker(n.lat,n.lng,e.name,e.image)}}}search(){if(this.selectedLocationId){const e={lat:parseFloat(this.latMain),lng:parseFloat(this.langMain)},n="assets/images/navbar/logo.png";this.map.setCenter(e),this.map.setZoom(14),this.clearMarkers(),this.createCustomMarker(e.lat,e.lng,"Search Result",n)}else alert("Please select a location.")}getLatAndLang(e){const[n,o]=e.target.value.split(",").map(Number);this.latMain=n,this.langMain=o}createCustomMarker(e,n,o,s){const c=document.createElement("div");c.className="custom-marker",c.innerHTML='\n      <div class="marker-content">\n        <img src="assets/images/navbar/logo.png" alt="marker">\n      </div>\n    ',c.style.position="absolute",c.style.transform="translate(-50%, -100%)";const g=new google.maps.OverlayView;g.onAdd=()=>{g.getPanes()?.overlayMouseTarget.appendChild(c)},g.draw=()=>{const d=g.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(e,n));d&&(c.style.left=`${d.x}px`,c.style.top=`${d.y}px`)},g.onRemove=()=>{c.remove()},g.setMap(this.map),c.addEventListener("click",()=>{document.createElement("div");const m=document.createElement("div");m.className="infoContainer",m.className="custom-marker",m.innerHTML=`\n        <div class="infoContainer">\n      <div class="marker-content w-100 h-75 rounded-3 ">\n       <img src="assets/images/navbar/logo.png" class="imageWindow"  alt="${o}"/>\n       </div>\n       <h2 class="my-4   w-100" >${o}</h2>\n       <span class="   w-100" >${o}</span>\n\n      </div>\n    `,this.infoWindow.setContent(m),this.infoWindow.setPosition({lat:e,lng:n}),this.infoWindow.open(this.map)})}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(_.S))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-our-location"]],viewQuery:function(n,o){if(1&n&&t.Gf(v,5),2&n){let s;t.iGM(s=t.CRH())&&(o.searchBoxRef=s.first)}},decls:47,vars:23,consts:[[1,"one"],[1,"container"],[1,"two"],[1,"row"],[1,"col-md-12"],[1,"top-two"],[1,"two-two"],[1,"col-md-3"],[1,"col-two-a"],[1,"box1","form-control",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[1,"form-control",3,"click"],[1,"fa-solid","fa-angle-left"],[1,"col-md-12","my-5"],[1,"position-relative"],["class","loader-overlay",4,"ngIf"],["id","map",2,"height","400px","width","100%"],[3,"value"],[1,"loader-overlay"],[1,"loaderMap"]],template:function(n,o){1&n&&(t._UZ(0,"div",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.ALo(11,"translate"),t.qZA()()(),t.TgZ(12,"div",4)(13,"div",6)(14,"div",3)(15,"div",7)(16,"div",8)(17,"h4"),t._uU(18),t.ALo(19,"translate"),t.qZA()()(),t.TgZ(20,"div",7)(21,"div",8)(22,"label"),t._uU(23),t.ALo(24,"translate"),t.qZA(),t._UZ(25,"br"),t.TgZ(26,"select",9),t.NdJ("ngModelChange",function(i){return o.selectedAreaId=i})("change",function(){return o.onAreaChange()}),t.YNc(27,P,2,2,"option",10),t.qZA()()(),t.TgZ(28,"div",7)(29,"div",8)(30,"label"),t._uU(31),t.ALo(32,"translate"),t.qZA(),t._UZ(33,"br"),t.TgZ(34,"select",9),t.NdJ("ngModelChange",function(i){return o.selectedLocationId=i})("change",function(i){return o.getLatAndLang(i)}),t.YNc(35,y,2,2,"option",10),t.qZA()()(),t.TgZ(36,"div",7)(37,"div",8),t._UZ(38,"br"),t.TgZ(39,"button",11),t.NdJ("click",function(){return o.search()}),t._uU(40),t.ALo(41,"translate"),t._UZ(42,"i",12),t.qZA()()()()()(),t.TgZ(43,"div",13)(44,"div",14),t.YNc(45,x,2,0,"div",15),t._UZ(46,"div",16),t.qZA()()()()()),2&n&&(t.xp6(7),t.hij(" ",t.lcZ(8,11,"home.services")," "),t.xp6(3),t.hij(" ",t.lcZ(11,13,"home.servicee"),""),t.xp6(8),t.hij("",t.lcZ(19,15,"home.stations")," "),t.xp6(5),t.hij(" ",t.lcZ(24,17,"home.area"),""),t.xp6(3),t.Q6J("ngModel",o.selectedAreaId),t.xp6(1),t.Q6J("ngForOf",o.area),t.xp6(4),t.hij(" ",t.lcZ(32,19,"home.location")," "),t.xp6(3),t.Q6J("ngModel",o.selectedLocationId),t.xp6(1),t.Q6J("ngForOf",o.locationsArea),t.xp6(5),t.hij("",t.lcZ(41,21,"home.search")," "),t.xp6(5),t.Q6J("ngIf",o.isLoading))},dependencies:[h.sg,h.O5,l.YN,l.Kr,l.EJ,l.JJ,l.On,f.X$],styles:["[_ngcontent-%COMP%]:root{--main-blue: #002777;--main-orange: #fe6219;--main-sky: #b8d9ec}.nav[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .ul-language[_ngcontent-%COMP%]{display:flex;justify-content:space-between;list-style-type:none;background-color:#ff0;width:100%}.nav[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .ul-language[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:20px;height:20px}.nav[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]   .ul-language[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:3px}.navbar-nav[_ngcontent-%COMP%]{width:100%}.nav-item[_ngcontent-%COMP%]{padding:0 10px;font-size:14px}.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--main-blue);font-weight:700}.nav-item[_ngcontent-%COMP%]   .my-home[_ngcontent-%COMP%]{color:var(--main-blue)}.nav-item[_ngcontent-%COMP%]:hover{border-bottom:2px solid var(--main-orange);color:var(--main-blue)}.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{color:#fff;background-color:var(--main-orange);padding:10px;border-radius:5px}.one[_ngcontent-%COMP%]{width:100%;height:100vh;background-image:url(11c878b1191740f6fe47ed3a23fd17e2.67f8c6f99ba890c1.png);background-size:100% 100%}.two[_ngcontent-%COMP%]{margin:100px 0}.two[_ngcontent-%COMP%]   .top-two[_ngcontent-%COMP%]{text-align:center}.two[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding:20px 0;font-size:40px}.two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Verdana,Geneva,Tahoma,sans-serif;color:#000000a4}.two[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0 80px}.two-two[_ngcontent-%COMP%]{width:100%;height:130px;color:#fff;background-color:#002776;padding:30px 0;border-radius:5px}.col-two-a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:20px}button[_ngcontent-%COMP%]{background-color:#ff5e18;font-size:30px;border:none;color:#fff}.col-two-a[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%;height:35px;font-size:16px;border-radius:5px;padding:3px 5px}button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:relative;left:2px}.col-two-a[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px}.map[_ngcontent-%COMP%]{width:100%;height:350px;background-image:url(9010c5a2669e7ee0c8e2a2aeb753875b.322081a00e9823b5.png);background-size:100% 100%;box-shadow:0 0 5px 2px #fffbc474}.two-last[_ngcontent-%COMP%]{text-align:center}.two-last[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ff5e18;font-size:30px;padding:10px 0}.two-last[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:14px;padding:5px 0;color:gray}.two-last[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#002776}.footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:53%}.footer[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-top:15px}.footer[_ngcontent-%COMP%]{background-color:#002776;padding:40px 0;color:#f5f5f5}.footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:15px;margin-top:30px}.footer[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-align:end}.footer[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20%;margin:10px 0}.line[_ngcontent-%COMP%]{width:100%;border:1px solid gray;margin:10px 0}.footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{text-align:end;padding:0 5px}@media screen and (max-width: 500px){.one[_ngcontent-%COMP%]{height:200px;background-size:cover}.two[_ngcontent-%COMP%]{margin:50px 0}.two[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0 20px}.two-two[_ngcontent-%COMP%]{height:auto;padding:20px}.col-two-a[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%;height:auto;font-size:14px;padding:5px}.map[_ngcontent-%COMP%]{height:200px;margin-top:20px}.two-last[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px}.two-last[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px}.two-last[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}}"]})}return a})()}];let L=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[M.Bz.forChild(w),M.Bz]})}return a})();var b=r(2552),T=r(3238),A=r(9862);let Z=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[h.ez,L,l.u5,b.m,f.aw.forRoot({defaultLanguage:"en",loader:{provide:f.Zw,useFactory:T.g,deps:[A.eN]}})]})}return a})()}}]);