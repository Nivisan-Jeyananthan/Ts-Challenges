type User = {
  Username: string;
  Email: string;
};

const user01 = {} as User;
const user02 = <User>{};

// intellisense triggers
user01.Email = 'foo@bar.com';
