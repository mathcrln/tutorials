// Loading Spinner
export default function LoadingOverlay({ show }: { show: boolean }) {
  return show ? <div className="loader" /> : null;
}
