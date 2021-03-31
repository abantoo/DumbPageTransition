import Highway from '@dogstudio/highway';
import Fade from './transition';


const Hw = new Highway.Core({
    transitions:{
        default:Fade
    }
});