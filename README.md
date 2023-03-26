### Simple Todo App web client (React, Redux, MUI)

#### Install locally
`yarn install`

#### Run locally
`yarn start`

#### Possible improvements
* Responsive mobile layout
* Provide a way to submit todo for mobile devices (now on Enter press only)
* Create extendable reducer with isLoading, error state functionality, to not copy-paste it every time 
* Provide way to redirect programmatically, out of React component tree
* Standardise design to extract as much styling as possible to the level of mui theme
* Provide correct fonts (MarkPro is not available in Google Fonts)
* Use library for simplifying form handling
* Rewrite form validation from HTML to MUI
* Save jwt to cookies/local storage and attempt to refresh if expired