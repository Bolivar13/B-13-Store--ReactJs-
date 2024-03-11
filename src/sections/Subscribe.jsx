import Button from '../Components/Button';

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sing Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input px-7 py-4 rounded-full border border-slate-900 border-solid"
        />
        <div className="flex max-sm:justify-end items-center">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
