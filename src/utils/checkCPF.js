const formatCPF = (cpf) => {
  const cleanedCPF = cpf.replace(/\D/g, "");

  if (cleanedCPF.length !== 11) {
    throw new Error("Invalid CPF: Must contain 11 digits.");
  }

  const formattedCPF = cleanedCPF.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4"
  );
  return formattedCPF;
};
