

const NewsLetter = () => {
  return (
    <section className="max_padd_container py-12 xl:py-28 bg-white ">
      <div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max=w-w[666px]">
        <h3 className="h3">
          Get Exclusive Offers on your mail
        </h3>
        <h4 className="uppercase bold-18">
          Subscribe to our newsletter and stay updated</h4>
          <div className="flexBetween rounded-full ring-1 rings-slate-900/10 hover:ring-slate-900/15 bg-primary w-full max-w-[588px]">
          <input type="email" placeholder="Your Email Address"  
          className="w-full bg-transparent ml-7 border-none outline-none regular-16"/>
          <button className="btn_dark_rounded">Subscribe</button>
          </div>
      </div>
    </section>
  )
}

export default NewsLetter