interface Response {
  token: string;
  user: {
    name: string;
    email: string
  }
};

// Fake API
export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'ad5gtd6bd65h4da3d1a4qwe1da32c1as4a46da32d1ad4q9ada',
        user: {
          name: 'Gustavo',
          email: 'gustavo@test.com'
        }
      });
    }, 1500);
  });
};