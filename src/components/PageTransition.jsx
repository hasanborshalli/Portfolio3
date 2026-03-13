import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";

export default function PageTransition({ children }) {
    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            exit="hidden"
        >
            {children}
        </motion.div>
    );
}
