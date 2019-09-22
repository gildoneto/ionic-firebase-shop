// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC50OzSTeZn3VEaTZuw_pA3Y3SAN8f9sjs',
    authDomain: 'ionic-firebase-shop-c6277.firebaseapp.com',
    databaseURL: 'https://ionic-firebase-shop-c6277.firebaseio.com',
    projectId: 'ionic-firebase-shop-c6277',
    storageBucket: '',
    messagingSenderId: '271095910056',
    appId: '1:271095910056:web:7dd49c802fe8c4f85c3c9d'
  }
};

/*
Sistema finalizado. No momento as regras do firebase são [atualizado em 09/09/2019]:
--------------------------------
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /Products/{productId} {
    	allow read, create;

        allow update: if
      	 request.resource.data.userId == request.auth.uid &&
      	 resource.data.userId == request.auth.uid

      allow delete: if
      	resource.data.userId == request.auth.uid
    }

     match /Users/{userId} {
    	allow read, create, update, delete;

    }
  }
}
---------------------------------------
*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
