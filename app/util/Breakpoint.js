

/**
 * Static class for util purposes. http://stackoverflow.com/questions/2671496/java-when-to-use-static-methods?noredirect=1&lq=1
 */

class Breakpoint {
   static get() {
     if (window.matchMedia("(max-width: 768px)").matches) {
        return "mobile";
     }
     else if (window.matchMedia("(max-width: 1024px)").matches && window.matchMedia("(min-width: 768px)").matches) {
        return "tablet";
     }
     else {
        return "desktop";
     }
   }
}

export default Breakpoint;
