/*
 * Copyright (c) contentmetrics GmbH, 2008
 * THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
 * APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
 * HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
 * OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
 * IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
 * ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
 *
 * Autor: Frank Räther, 20090508
 * Code: JavaScript Library zum Hinzufuegen von events
 * Kunde: G+J
 *
 */
 
 /* array with all referer-domains that should be excluded (look at sc_get_external_referer()) */
 /* this is specific for every site ************************************************************/
 var excluded_referers = new Array('www.stern.de', 'new.stern.de');
 /**********************************************************************************************/
 
function cm_varIsSet(vn){//variable vn ist gesetzt und nicht leer
  if(typeof(vn)!="undefined"&&vn!="")return true;
  return false;
}
function cm_eventIsSet(ev){//event ev ist gesetzt
  if(!cm_varIsSet(s.events))return false;
  var events=''+s.events;
  if(events.indexOf(ev)>-1)return true;
  return false;
}
function cm_addEvent(ev){//setzt einen event ev einmalig pro seite
  if(!cm_varIsSet(s.events)){//1.fall events nicht definiert oder leer
    s.events=ev;
    return;
  }  
  if(cm_eventIsSet(ev)) return;//2.fall nicht leer aber schon drin
  s.events+=','+ev;//3.fall nicht leer aber nicht drin
}
function in_array(item,arr){
  for(p=0;p<arr.length;p++){
    if (item === arr[p]){
      return true;
    }
  }
  return false;
}
/*Plugin cm_getGroup V1.0 20090508FRÄ
finds clustered values
*/

function cm_getGroup( value, values, titles ) {
  if( typeof(value)=='string' ) value=parseInt(value);
  vals = values.split(';');
  if( titles ){
    names = titles.split(';');
  } else {
    names = vals;
  }
  for( pair in vals ){
    v = vals[pair].split('-');
    if( v.length==2 ){//has -
      if( v[0]=='' && parseInt(v[1])>=value ){
        return names[pair];
      }
      if( parseInt(v[0])<=value && (v[1]=='' || parseInt(v[1])>=value) ){
        return names[pair];
      }
    } else {//is max or min
      if( v[0].indexOf('<')==0 ){
        if( parseInt(v[0].substr(1))>=value ){
          return names[pair];
        }
      } else if( v[0].indexOf('>')==0 ){
        if( parseInt(v[0].substr(1))<=value ){
          return names[pair];
        }
      } else {//no match
        return '';
      }
    }
  }
}

//Clustering of search result amount.
function cm_numberOfSearchResults(number_of_results){
  return cm_getGroup(number_of_results,'<1;1-5;6-10;11-20;21-30;31-40;41-50;>50','<1;1-5;6-10;11-20;21-30;31-40;41-50;>50');
}

//Hilfsfunktionen Cookies
function Delete_Cookie(name,path,domain){
  if(Get_Cookie(name)){
    document.cookie=name+"="+((path)?";path="+path:"")+((domain)?";domain="+domain:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";
  }
}
function Set_Cookie(name,value,expires,path,domain,secure){
  var today=new Date();
  today.setTime( today.getTime() );
  if(expires)expires = expires * 1000 * 60 * 60 * 24;
  var expires_date=new Date(today.getTime()+(expires));
  document.cookie=name+"="+escape(value)+((expires)?";expires="+expires_date.toGMTString():"")+((path)?";path="+path:"")+((domain)?";domain="+domain:"")+((secure)?";secure":"");
}
function Get_Cookie(check_name) {
  var a_all_cookies=document.cookie.split(';');
  var a_temp_cookie='';
  var cookie_name='';
  var cookie_value='';
  var b_cookie_found=false;
  for(i=0;i<a_all_cookies.length;i++){
    a_temp_cookie=a_all_cookies[i].split('=');
    cookie_name=a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
    if(cookie_name==check_name){
      b_cookie_found = true;
      if(a_temp_cookie.length>1){
        cookie_value=unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
      }
      return cookie_value;
      break;
    }
    a_temp_cookie=null;
    cookie_name='';
  }
  if (!b_cookie_found)return null;
}

/**
 * Helper function to parse a param-string into an array
 * ~paz
 */
function sc_get_params(str, sep) {
  var vars = new Array();
  var pairs = str.split(sep);
  for(var i in pairs){
    p = pairs[i].split('=');
    vars[p[0]] = p[1];
  }
  return vars;  
}

/**
 * Get the value of a query parameter. 
 * (Dummy-Code by CM functionally rebuilt by paz.)
 */
function sc_get_hash_param(n, sep) {
  if (!sep) var sep = ';';
  return sc_get_params(window.location.hash.substr(1), sep)[name];
}

/**
 * Get the value of a query parameter. 
 * (Dummy-Code by CM functionally rebuilt by paz.)
 */
function sc_get_query_param(name, sep) {
  if (!sep) var sep = '&';
  return sc_get_params(document.location.search.substr(1), sep)[name];
}

function sc_get_external_referer() {
  var ref = document.referrer;
  if (ref != '') {
    ref = ref.replace(/https:\/\//,'');
    ref = ref.replace(/http:\/\//,'');
    ref = ref.substr(0,ref.indexOf('/')); // get domain of referer 
    if (!is_excluded_referer(ref) && ref != window.location.hostname) {
      // so this is an external referer
      return ref;
    }
  } 
  return '';
}
function is_excluded_referer(item) {
  for (i=0; i < excluded_referers.length; i++) {
    if (item == excluded_referers[i]) {
      return true;
    }
  }    
  return false;
}

function make_double_digit(data) {
  if (data < 10)
  {
    return "0" + data;
  }
  return data;
}

function sc_get_campaign() {
  var url = window.location.href;
  var index = url.indexOf('#');
  if (index > 0) {
    var string = url.substr(index);
    string = string.replace(/#/,'');
    string = string.replace(/osc_/g,'');
    string = string.replace(/utm_/g,'');
    var pairs = string.split('&');
    var campaign = new Array();
    for (var i = 0; i < pairs.length; i++) {
      var tmp = pairs[i].split('=');
      campaign[tmp[0]] = tmp[1];
    }
    return campaign;
  } else if (index == -1 && url.indexOf('?') != -1) {
    var campaign = new Array();
    campaign['source'] = s.getQueryParam('utm_source');
    campaign['medium'] = s.getQueryParam('utm_medium');
    campaign['campaign'] = s.getQueryParam('utm_campaign');
    campaign['link_position'] = s.getQueryParam('link_position');
    campaign['term'] = s.getQueryParam('utm_term');
    campaign['content'] = s.getQueryParam('utm_content');
    if (campaign['source'] == '') {
      campaign['source'] = s.getQueryParam('osc_source');
      campaign['medium'] = s.getQueryParam('osc_medium');
      campaign['campaign'] = s.getQueryParam('osc_campaign');
    }
    return campaign;
  }
  return null;
}

function s_doPlugins() {

  // s.server
  s.server = window.location.hostname;
  // number of attempts -- may be used to break recursion
  if (!s.numattempt) {
    s.numattempt = 0;
  }
  // correct some values for framework-pages based on URL-params
  var url_first_subdir = window.location.pathname.split('/')[1];
  if (s.prop7 == 'Rahmen') {
    switch (url_first_subdir) {
      case 'news':
        s.pageName = 'Newsticker';
        s.channel = 'Newsticker';
        s.prop1 = 'Newsticker';
        s.prop7 = 'Newsticker';
        s.hier1 = 'Newsticker';
        break;
      case 'archiv':
        s.pageName = 'Archiv';
        s.channel = 'Archiv';
        s.prop1 = 'Archiv';
        s.prop7 = 'Archiv';
        s.hier1 = 'Archiv';
        break;
      case 'search':
        s.pageName = 'Suche';
        s.channel = 'Suche';
        s.prop1 = 'Suche';
        s.prop7 = 'Suche';
        s.prop8 = sc_get_query_param('q');
        s.prop9 = 'undefined';
        s.prop10 = sc_get_query_param('p');
        s.prop12 = 'suche:'+s.prop8;
        s.hier1 = 'suche,'+s.prop8;
        // first get hands on the document -- if it's not ready we need to
        // recurse and don't want other values to be set already!
        /*var sc_numres = document.getElementById('sc_numresult');
        // if the element isn't there yet try again in some msecs
        if (!sc_numres) {
          setTimeout("s_doPlugins()", 500);
            return false;
        }
        s.prop9 = cm_numberOfSearchResults(sc_numres.innerHTML);
        if (s.prop9 == '<1') {
            cm_addEvent('event8');
        } else {
            cm_addEvent('event9');
        }*/
        break;
    }
  }

  // s.prop11: external referer
  var referer = sc_get_external_referer();
  if ((referer != '') && (document.referrer.indexOf("fb-xd-fragment") == "-1"))
  {
    s.prop11 = referer;
  }

  // stop facebook referrer inflation (STR-1129)
  s.referrer=s.facebookSocialRefferrers();

  // catch register event
  if (s.getQueryParam('sso_action') == 've') {
    var regevent = document.getElementById('sc_register_event');
    // if the element isn't there yet try again in some msecs
    // -- but only a limited number of times
    if (regevent) {
      cm_addEvent('event7');
    } else if (s.numattempt < 3) {
      //console.log("sc_register_event not found, recursing; numattempt: ", s.numattempt);
      s.numattempt++;
      setTimeout("sc_do_request(s)", 500);
      return false;
    } 
  }

  // catch campaigns
  // old param
  if (!s.campaign && s.getQueryParam('CMP') != '') {
    s.campaign = s.getQueryParam('CMP');
    s.campaign = s.getValOnce(s.campaign,'s_campaign',0);
  }
  // new param
  if (!s.campaign && s.getQueryParam('campaign') != '') {
    s.campaign = s.getQueryParam('campaign');
    s.campaign = s.getValOnce(s.campaign,'s_campaign',0);
  }
  // utm_source or osc_source
  if (!s.campaign && (window.location.href.indexOf('utm_source') != -1 || window.location.href.indexOf('osc_source') != -1)) {
    var campaign = sc_get_campaign();
    if (campaign != null) {
      s.campaign = campaign['source'] + '-' + campaign['medium'] + '-' + campaign['campaign'] + '-' + campaign['term'] + '-' + campaign['content'];
      s.eVar12 = campaign['source'];
      s.eVar13 = campaign['medium'];
      s.eVar14 = campaign['campaign'];
      s.eVar15 = campaign['term'];
      s.eVar16 = campaign['content'];
      s.prop15 = campaign['link_position'];
      s.hier3  = campaign['source'] + ',' + campaign['medium'] + ',' + campaign['campaign'] + ',' + campaign['term'] + ',' + s.prop1;
      if (typeof(campaign['medium']) == 'undefined' || campaign['medium'] == 'undefined' ||
          campaign['medium'] == '' || typeof(campaign['campaign']) == 'undefined' ||
          campaign['campaign'] == 'undefined' || campaign['campaign'] == '') {
        s.prop19 = window.location;
        s.prop20 = document.referrer;
      }
    }
  }

  // newsletter
  if(!s.campaign && s.getQueryParam('nl') != '') {
    s.campaign = s.getQueryParam('nl');
    s.campaign = 'newsletter-emails-' + s.getValOnce(s.campaign,'s_campaign',0);
    s.eVar12 = 'newsletter';
    s.eVar13 = 'email';
    s.eVar14 = '';
  }

  if (s.server != 'www.stern.de') {
    if (s.server == 'stern.arztauskunft.de') {
      s.pageName = 'gesundheit:arztsuche:rahmen';
      s.channel = 'gesundheit';
      s.prop1 = 'arztsuche';
      s.prop2 = ' 1018246';
      s.prop6 = 'gesundheit';
      s.prop7 = 'rahmen';
      s.prop10 = '1';
      s.prop12 = 'gesundheit:arztsuche:rahmen:arztsuche';
      s.hier1 = 'gesundheit,arztsuche';
    }
  }

  if(!s.eVar1)s.eVar1=s.prop1;//artikelid in commerce
  if(!s.eVar2)s.eVar2=s.pageName;//pagename in commerce
  if(!s.eVar3)s.eVar3=s.channel;//site section in commerce
  if(!s.eVar4)s.eVar4="+1";//pagecount as eVar
  if(!s.eVar7)s.eVar7=s.prop7;//content typ in commerce
  if(!s.eVar9)s.eVar9=s.prop8;//internal search keyword
  if(!s.eVar11)s.eVar11=s.prop11;//referrer domain
  if(!s.eVar12)s.eVar12=s.getValOnce(s.getQueryParam('source'),'v12',0);
  if(!s.eVar13)s.eVar13=s.getValOnce(s.getQueryParam('medium'),'v13',0);
  if(!s.eVar14)s.eVar14=s.getValOnce(s.getQueryParam('campaign'),'v14',0);  
  if(!s.events)s.events ="event1"; //jede Seite sendet "ich bin eine Produkt Seite"
  
  //data-collector for timeSlot like Saale, SMSTR-646
  var allowedArticleTypes = new Array('artikel','bilderseite','spiel','video','wissenstests','frage');
  var articleTypeInfo     = s.prop7.split(":");
  var articleType         = articleTypeInfo[0];
  
  var articleIdInfo       = s.prop1.split(":");
  var articleId           = articleIdInfo[0];
  var articleTitle        = articleIdInfo[1];
  
  //disabled articles (bilder des tages, star-klick), SMSTR-646
  var disabledArticleIds  = new Array('1501450', '655001');

  //check for ajax in s.hier1 (especially for Video, which are doublecounted in Omniture!)
  //check for disabled articles
  //check for allowed articleType
  if (
       s.hier1.lastIndexOf("Ajax") == -1 && 
       !in_array(articleId, disabledArticleIds) &&
       in_array(articleType, allowedArticleTypes)
     )
  {
    var now     = new Date();
    var year    = now.getFullYear();
    //basic check for correct client date
    if (year > 2009)
    {
      var month   = make_double_digit(now.getMonth().toString());
      var day     = make_double_digit(now.getDay().toString());
      var hour    = make_double_digit(now.getHours().toString());
      var minutes = make_double_digit(now.getMinutes().toString());

      //only need first value for ten minute slot: 10:36 => 10:30
      var minutesForSlot = minutes.substring(0,1) + '0';
      var hourMinutes    = hour + minutesForSlot;
      
      //set s.props
      s.prop30 = year + '-' + month + '-' + day + ' ' + hourMinutes;
      s.prop31 = hourMinutes;
      s.prop33 = articleId;
      s.prop34 = hourMinutes + '|' + articleId;
      s.prop36 = hourMinutes + '|' + s.channel + ':' + articleId + ':' + articleTitle;
      //check for first page
      if (s.prop10 == '1')
      {
        s.prop32 = hourMinutes;
      }
    }
  }
  
  // finally, all to lower case...
  var props = new Array('pageName','channel','prop1','prop2','prop3','prop6','prop7','prop8','prop9','prop10','prop11','prop12','hier1','hier2','campaign','eVar12','eVar13','eVar14');
  for (i in props) {
    if (typeof props[i] != 'function')
    {
      eval('tmp = s.'+props[i] + ';');
      if (typeof tmp == 'string') {
        eval('s.'+props[i]+'=s.'+props[i]+'.toLowerCase()');
      }
    }
  }

}
