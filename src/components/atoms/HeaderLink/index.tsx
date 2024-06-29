
type Props = {
  label: string;
  path: string;
  isActive: boolean;
}
export default function HeaderLink({ label, path, isActive }: Props) {

  return (
    <a
      href={path}
      style={{
        fontWeight: isActive ? 700 : 500,
        color: isActive ? '#ae14d4' : 'gray',
        borderColor: isActive ? '#ae14d4' : 'transparent'
      }}
    >
      {label}
    </a>
  )
}