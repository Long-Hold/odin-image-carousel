import { controlCarouselTransitions } from "./modules/carouselController"
import "./styles/styles.css"

/**When the next or prev button is clicked,
 * pick the next or prev sibling to the current image.
 * 
 * If current image is the first or last element,
 * then pick the first or last element in the node list
 * of images. (Wrap-around)
 */

controlCarouselTransitions();