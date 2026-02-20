import { Button } from '@/components/ui/button';
import { signOut } from '@/auth';
import React from 'react';

const Page = () => {
  return(
    <>
      <form action={async () => {
        "use server";

        await signOut();
      }}
      className = "mb-10"
      >
        <Button>Logout</Button>
      </form>

      <section>
        <h2 className='font-bebas-neue text-4xl text-light-100'>Borrowed Books</h2>
        <ul className='book-list' />
      </section>
    </>
  )
}

export default Page;
