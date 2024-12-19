package tn.esprit.rh.achat.Dto;

import java.util.Set;

import lombok.Getter;
import lombok.Setter;
import tn.esprit.rh.achat.entities.Produit;

@Getter
@Setter
public class DTOCategorieProduit {
	private Long idCategorieProduit;
	private String codeCategorie;
	private String libelleCategorie;
	private Set<Produit> produits;
	
	public DTOCategorieProduit(String codeCategorie, String libelleCategorie) {
        super();
        this.libelleCategorie = libelleCategorie;
        this.codeCategorie = codeCategorie;
    }
}
