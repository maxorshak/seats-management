import { Layout } from '@/components/layout';
import { Header } from '@/components/header';
import { Table } from '@/components/table';

export default function IndexPage() {
  return (
    <Layout>
      <main className="flex justify-center font-main text-primary">
        <div className="my-16 flex min-h-screen w-[1200px] flex-col gap-14">
          <Header />
          <figure className="mx-0.5 h-2 bg-[#EFF3F8]" />
          <Table />
        </div>
      </main>
    </Layout>
  );
}
