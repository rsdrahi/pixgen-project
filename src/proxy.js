import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import { NextResponse } from 'next/server'
 
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
  console.log("Message from Proxy");
  // return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
  matcher: ['/profile'],
}