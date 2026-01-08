import { motion } from "framer-motion";

type BoottomSheetProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export default function BottomSheet({
  open,
  onClose,
  children,
}: BoottomSheetProps) {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: open ? 0 : "100%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 mx-auto h-[65vh] w-full md:w-112.5 bg-white rounded-t-2xl shadow-xl z-50"
      >
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-2" />

        <div className="overflow-y-scroll h-[calc(65vh-30px)] px-4 pb-4 no-scrollbar">
          {children}
        </div>
      </motion.div>
    </>
  );
}
