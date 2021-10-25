Just getting started! 

If you would like to contribute to Golden Holograms VR or Alpha VR (a far more substantial project), just let me know! 

To install: 

    git clone https://github.com/Alpha-CubeSat/GHVR.git

    in root repo directory: npm install 
    
    There's a known issue with a specific node module (metro) that will display the following error when starting the React Native Packager: Invalid regular expression: /(node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class
    
    You can fix it by replacing the following code at this path: ...GHVR\node_modules\metro\src\blacklist.js 
    
        Replace: 
        
            var sharedBlacklist = [
            /node_modules[/\\]react[/\\]dist[/\\].*/,

            /website\/node_modules\/.*/,

            /heapCapture\/bundle\.js/,

            /.*\/__tests__\/.*/];
        
        With: 
        
            var sharedBlacklist = [
            /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
            /website\/node_modules\/.*/,
            /heapCapture\/bundle\.js/,
            /.*\/__tests__\/.*/
            ];
            
       
To run: 

    npm start 
    
    the cli should provide a link to your local development environment -- default is http://localhost:8081/index.html
    
    
Happy coding! 
    
    
            
     

