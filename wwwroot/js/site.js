// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function(){
    $("a.mobile").click(function(){
      $(".sidebar").slideToggle('fast');
    });
    window.resize = function(event){
      if($(window).width() > 320){
        $(".sidebar").show();
      }
    };
  });
  
