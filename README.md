## wushu avatar builder
wushu avatar builder is an interactive web app that allows users to create their own wushu stick figure athlete by selecting different silk uniforms and weapons. after customizing the avatar, users can watch a real wushu performance corresponding to their weapon of choice.

## features
- build custom avatar: click on silk or weapon options to customize your stick figure
- hover descriptions: get detailed descriptions of wushu elements by hovering over silk and weapon options
- final competition button links to corresponding youtube performance after user has customized their avatar

## tech stack
- frontend: next.js, react, typescript
- styling: tailwind css
- assets: png images for stick figure, silks, weapons
- version control: git

## getting started
1. clone the repository
```
git clone https://github.com/kxiratan/wushu-avatar.git
cd wushu-avatar
```
2. install dependencies
```
npm install
```
3. run development server
```
npm run dev
```
4. open http://localhost:3000 in your browser

## how to use
1. on home page, click on wushu description to start the avatar builder
2. on the builder page, click on silk or weapon buttons to toggle between options
3. hover over options to see descriptions, click on options to customize avatar
4. once a silk and weapon are selected, click "competition time!" button to watch a real wushu performance corresponding to your selected weapon

## project structure
```
wushu-avatar/
├── app/
│   ├── builder/
│   │   └── page.tsx          # avatar builder page with silk/weapon selection
│   ├── intro/
│   │   └── page.tsx          # intro page with wushu description
│   ├── globals.css           # global styles and grid background
│   ├── layout.tsx            # root layout
│   └── page.tsx              # home/landing page
├── public/
│   ├── blue-and-white-silk.png
│   ├── broadsword.png
│   ├── red-and-white-silk.png
│   ├── stick-figure.png
│   └── straightsword.png
└── package.json
```

## future improvements
- add more customization options (hair, long weapons, northern/southern style, etc.)
- animate customized avatar
- option to save and create multiple avatars

## author
keira tan
- github: https://github.com/kxiratan
- email: keira.tan@berkeley.edu