package tn.esprit.rh.achat.Dto;


import lombok.Getter;
import lombok.Setter;
import tn.esprit.rh.achat.entities.Facture;
@Getter
@Setter
public class DTOReglement {
	private Long idReglement;
	private float montantPaye;
	private float montantRestant;
	private Boolean payee;
	
	private Facture facture;
	
	public DTOReglement (float montantPaye, float montantRestant,Boolean payee) {
        super();
        this.montantPaye = montantPaye;
        this.montantRestant = montantRestant;
        this.payee = payee;
    }

}
