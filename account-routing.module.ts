const routes: Routes = [
{
  path: 'account',
  children: [
    {
      path: 'register',
      component: RegistrationComponent
    },
    {
      path: 'login',
      component: LoginComponent,
    },
  ],
},
{
  path: 'signin-microsoft',
  component: SigninMicrosoftComponent,
},
{
  path: 'signin-google',
  component: SigninGoogleComponent,
},
{
  path: 'not-authorized',
  component: NotAuthorizedComponent,
},
];