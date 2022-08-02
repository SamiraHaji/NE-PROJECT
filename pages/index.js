
export default function Home() {
  const router = useRouter();
  const agenceRef = useRef(null);

  const search =(e) => {
  e.preventDefault(); 
  const term = agenceRef.current.value;

  if(!term) return;

router.push(`/agence?term=${term}`);
  }
  return (
<main className="flex flex-col items-center justify-center" >
<div  className=''>
 <h1 className='flex flex-container items-center justify-center font-bold italic'> NOUVELLE ECOLE</h1>

</div>
</main>

  )
}
