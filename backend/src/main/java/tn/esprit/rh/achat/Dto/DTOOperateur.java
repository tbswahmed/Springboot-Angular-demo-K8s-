package tn.esprit.rh.achat.Dto;

import java.util.Set;



import lombok.Getter;
import lombok.Setter;
import tn.esprit.rh.achat.entities.Facture;
@Getter
@Setter
public class DTOOperateur {

	private Long idOperateur;
	private String nom;
	private String prenom;
	
	private String password;
	private Set<Facture> factures;

    public DTOOperateur(String nom, String prenom, String password, Set<Facture> factures) {
        super();
        this.nom = nom;
        this.prenom = prenom;
        this.password = password;
        this.factures = factures;
    }
}