import CartIcon from './CartIcon';
import OpenIcon from './OpenIcon';

/**
 * A shared component and Suspense call that's used in `App.server.jsx` to let your app wait for code to load while declaring a loading state
 */
export default function LoadingFallback() {
  return (
    <div className="flex mx-auto h-screen bg-black">
      <div className="m-auto">
          <img src="/image/semmsluxuries.svg" alt="Logo" className="w-[170px] animate-pulse" />
      </div>
    </div>
  );
}
