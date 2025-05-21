import { useParams } from 'react-router-dom';

export default function PYQPage() {
  const { subjectName } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Previous Year Questions - {subjectName}</h1>

      <p>This page will display previous year questions related to {subjectName}.</p>
    </div>
  );
}
