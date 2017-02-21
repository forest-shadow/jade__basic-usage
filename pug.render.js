'use strict';

let pug = require( 'pug' ),
    fs = require('fs'),
    path = './src';

function compilePug(){
    let file = path + '/basic_layout.pug';
    let fn = pug.compileFile( file, {pretty: '\t'}),
        html = fn();
    fs.writeFile( './basic_layout.html', html, 'utf8', (err) => {
      if (err) throw err;
      console.log( file +' compiled.\n' );
    });

}

fs.readdir( path, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
  compilePug();
});